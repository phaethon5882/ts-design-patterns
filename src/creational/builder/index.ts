/**
 * 빌더패턴을 사용하면 복잡한 객체의 초기화를 한단계씩 할 수 있어서 가독성이 좋아진다. 보통 메서드 체이닝으로 구현한다.
 */
(() => {
  class HotDog {
    // kraut 는 소금에 절인 양배추 ( 독일꺼인듯? )
    constructor(public bread: string, public ketchup?: boolean, public mustard?: boolean, public kraut?: boolean) {}

    addKetchup() {
      this.ketchup = true;
      return this;
    }

    addMustard() {
      this.mustard = true;
      return this;
    }

    addKraut() {
      this.kraut = true;
      return this;
    }
  }

  // prettier-ignore
  const myLunch = new HotDog('gluten free')
    .addKetchup()
    .addMustard()
    .addKraut();

  console.log(myLunch);
})();
