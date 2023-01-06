AFRAME.registerComponent("boxes", {
    schema: {
      height: { type: "number", default: 0.8 },
      width: { type: "number", default: 0.8 },
      depth: { type: "number", default: 0.8 },
    },
    init: function () {
  
      //x position array
      px = [22.86, -17.35, -12.81, 0.44, -30.18,
        -25.89, 15.61, 29.68, 11.95, -15.40,
        -14.09, 34.76, 2.29, 21.77, 1.57,
        34.72, 12.04, -10.90, 6.48, 15.66];
  
      //z position array
      pz = [54.56, -4.71, 14.91, 56.74, 41.13,
        50.76, 57.84, 7.02, -5.24, -26.82,
        27.59, -35.78, 34.52, 31.32, -9.22,
        26.72, 48.90, 27.24, 9.94, 54.29 ];
  
      for (var i = 0; i < 20; i++) {
        var box = document.createElement("a-entity");
  
        //Update the position variables values from the array values.
        posX = px[i]
        posY = 1.5
        posZ = pz[i]
  
        position = { x: posX, y: posY, z: posZ };
  
        box.setAttribute("id", "box" + i);
        
        box.setAttribute("position", position);
  
        box.setAttribute("geometry", {
          primitive: "box",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        box.setAttribute("material", {
          src: "./assets/boxTexture.jpg",
          repeat: "1 1 1",
        });
  
        box.setAttribute("static-body", {});
        
  
        var sceneEl = document.querySelector("#main_scene");
        sceneEl.appendChild(box);
      }
    },
  });
  
  AFRAME.registerComponent("stones", {
    schema: {
      height: { type: "number", default: 0.3 },
      width: { type: "number", default: 0.3 },
      depth: { type: "number", default: 0.3 },
    },
    init: function () {
  
      //x position array
      px = [ 54.56,-4.71, 14.91, 56.74, 41.13,
        50.76, 57.84, 7.02, -5.24, -26.82,
        27.59, -35.78, 34.52, 31.32, -9.22,
        26.72, 48.90, 27.24, 9.94, 54.29 ];
  
      //z position array
      pz = [22.86, -17.35, -12.81, 0.44, -30.18,
        -25.89, 15.61, 29.68, 11.95, -15.40,
        -14.09, 34.76, 2.29, 21.77, 1.57,
        34.72, 12.04, -10.90, 6.48, 15.66];
  
      for (var i = 0; i < 20; i++) {
        var stone = document.createElement("a-entity");
  
        //Update the position variables values from the array values.
        posX = px[i]
        posY = 1.5
        posZ = pz[i]
  
        position = { x: posX, y: posY, z: posZ };
  
        stone.setAttribute("id", "box" + i);
        
        stone.setAttribute("position", position);
  
        stone.setAttribute("geometry", {
          primitive: "box",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        stone.setAttribute("material", {
          src: "./assets/rockTexture.jpg",
          repeat: "1 1 1",
        });
  
        stone.setAttribute("static-body", {});
        
  
        var sceneEl = document.querySelector("#main_scene");
        sceneEl.appendChild(stone);
      }
    },
  });
  