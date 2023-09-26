/**  imports here **/
export const loadGameScene = () => {
  console.log("loadGameScene called!");

  // add a black background to the scene
  const background = add([rect(width(), height()), color(0, 0, 0), z(-2)]);

  loadSprite("apple", "https://kaboomjs.com/sprites/apple.png");
  // loadSprite("castle", "../../public/img/logo1.png");
  loadSprite("floor", "../../img/tiles/floor_sand_stone_0.png");

  const floor = add([
    sprite("floor")
  ])
}
