$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(243, 37, 9)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(600, 600, 200, 20, "brown")
 createBadPlatform(30, 720, 2000, 20, "red")
createPlatform(1000, 500, 200, 20, "brown")
createPlatform(100, 300, 200, 20, "brown", 100, 300, 2, 500, 500, 500)
createPlatform(600, 300, 200, 20, "brown")
createPlatform(1000, 500, 200, 20, "brown", 1000, 1000, 2, 300, 300, 1)
    // TODO 3 - Create Collectables
createCollectable("RupeeG", 1080, 460);
createCollectable("RupeeG", 150, 460);
createCollectable("RupeeG", 680, 550);
    createCollectable("RupeeG", 1080, 100)
    // TODO 4 - Create Cannons
createCannon("left", 500, 1000)
createCannon("top", 200, 900, 30, 30, 100, 400, 6)
createCannon("right", 500, 2000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
