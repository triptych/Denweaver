/**  imports here **/
export const loadGameScene = () => {
  console.log("loadGameScene called!");

  // add a black background to the scene
  const background = add([
    rect(width(), height()),
    color(0, 0, 0),
    z(-2),
  ]);
}