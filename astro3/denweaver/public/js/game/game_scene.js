/**  imports here **/
export const loadGameScene = () => {
  console.log("loadGameScene called!");

  // add a black background to the scene
  const background = add([rect(width(), height()), color(0, 0, 0), z(-2)]);

  loadSprite("apple", "https://kaboomjs.com/sprites/apple.png");
  // loadSprite("castle", "../../public/img/logo1.png");
  loadSprite("floor", "../../img/tiles/floor_sand_stone_0.png");
  loadSprite("wall", "../../img/tiles/brick_brown_0.png");
  loadSprite("char", "../../img/char/halfling_new.png");


  scene("main", (lvlIdx) => {
    const SPEED = 320;

    const levels = [
      [
        "============",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "=++++++++++=",
        "============",
      ],
      // add more levels later to switch to
    ];


    const level = addLevel(levels[lvlIdx], {
      tileWidth: 32,
      tileHeight: 32,
      pos: vec2(32, 32),
      tiles: {
        "=": () => [
          sprite("wall"),
          area(),
          body({ isStatic: true }),
          anchor("center"),
        ],
        "+": () => [
          sprite("floor"),
          area(),
          anchor('center')
        ],
        "@": () => [
          sprite("char"),
          area(),
          body(),
          anchor("center"),
          "player"],
      },
    });

    // const player = level.get("player")[0];

    const player = level.spawn([
      sprite('char'),
      area(),
      body(),
      anchor("center"),
      "player"
    ], 2,2)
    const dirs = {
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    };


    for (const dir in dirs) {
      onKeyPress(dir, () => {
        //  dialog.dismiss();
      });
      onKeyDown(dir, () => {
        player.move(dirs[dir].scale(SPEED));

      });
    }


  });

    go("main", 0);
}
