import type { PathLike } from 'fs';
import { cp, readFile, writeFile } from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';

const sourceDir = path.join(__dirname, 'src');
const pkgJsonDir = path.join(__dirname, 'package.json');
const staticDir = path.join(__dirname, 'static');
const distDir = path.join(__dirname, 'dist');

(async () => {
  await registerEntryPoints(`${sourceDir}/**/*.html`);
  await copyStaticDirectoryToDist();
})();

async function registerEntryPoints(source: string) {
  const entryPoints = await getEntryPoints(source);
  await addEntryPointsToPackageJson(entryPoints);
}

async function getEntryPoints(source: string) {
  const entryPoints = await fg(source);
  return entryPoints.map((absPath) => `.${absPath.replace(process.cwd(), '')}`);
}

async function addEntryPointsToPackageJson(entryPoints: PathLike[]) {
  const pkgRaw = await readFile(pkgJsonDir, 'utf-8');
  const pkgJson = JSON.parse(pkgRaw);
  pkgJson.source = entryPoints;

  await writeFile(pkgJsonDir, JSON.stringify(pkgJson, null, 2), 'utf-8');
}

async function copyStaticDirectoryToDist() {
  await cp(staticDir, path.join(distDir, 'static'), { recursive: true, force: true });
}
