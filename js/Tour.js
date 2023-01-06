AFRAME.registerComponent("tour",{

    schema: {
      state: { type: "string", default: "places-list" },
      selectedCard: { type: "string", default: "#card1" },
    },

    init: function(){
        this.placesContainer=this.el
        this.createCards()
    },

    tick: function () {
      const { state } = this.el.getAttribute("tour");
  
      if (state === "view") {
        this.hideEl([this.placesContainer]);
        this.showView();
        
      }
    },
    hideEl: function (elList) {
      elList.map(el => {
        el.setAttribute("visible", false);
      });
    },

    showView: function() {  
      const skyEl = document.querySelector("#environment");
      const titleText1 = document.querySelector("#title1");
      const titleText2 = document.querySelector("#title2");
      const titleText3 = document.querySelector("#title3");
      const carModel = document.querySelector("#car-model")
      const boxes = document.querySelector("#boxes")
      const cursor=document.querySelector("#camera-cursor");
      const camera=document.querySelector("#camera")

      titleText1.setAttribute("visible",false)
      titleText2.setAttribute("visible",false)
      titleText3.setAttribute("visible",false)
      carModel.setAttribute("visible",true)

      //cursor.parentNode.removeChild(cursor)

      boxes.setAttribute("boxes",{})
      boxes.setAttribute("stones",{})

      var settings={preset:"goaland" ,
      skyType:"gradient",
      lighting:"point"}

      if(this.data.selectedCard==="desert"){
        settings.preset="egypt"
      }else if(this.data.selectedCard==="forest"){
        settings.preset="forest"
      }else if(this.data.selectedCard==="mountain"){
        settings.preset="arches"
      }else if(this.data.selectedCard==="underwater"){
        settings.preset="poison",
        settings.skyType="atmosphere"
      }

      skyEl.setAttribute("environment",settings);
    

    },

    createCards:function(){
        const thumbNailsRef = [
            {
              id: "desert",
              title: "Desert",
              url: "./assets/thumbnails/desert.jpg",
            },
            {
              id: "forest",
              title: "Forest",
              url: "./assets/thumbnails/forest.jpg",
            },
      
            {
              id: "mountain",
              title: "Mountain",
              url: "./assets/thumbnails/mountain.jpg",
            },
            {
              id: "underwater",
              title: "Underwater",
              url: "./assets/thumbnails/underwater.jpg",
            },
          ];

          var previousXPosition= -62.5

          for(var item of thumbNailsRef){
            var posX= previousXPosition+25
            var posY= 0
            var posZ= -40

            var position={x:posX ,y:posY, z:posZ}

            previousXPosition=posX

            const borderEl=this.createBorder(item.id,position)
            const thumbnailEl=this.createThumbnail(item)
            borderEl.appendChild(thumbnailEl)
            const titleEl=this.createTitle(position,item)
            borderEl.appendChild(titleEl)

            this.placesContainer.appendChild(borderEl)
          }
    },

    createBorder: function(id,position){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"#ffffff",
            opacity:0.5
        })
        entityEl.setAttribute("cursor-listener", {});


        return entityEl
    },

    createThumbnail: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"circle",
            radius:9
        })
        entityEl.setAttribute("material",{
            src:item.url
        })
        entityEl.setAttribute("cursor-listener", {});
        return entityEl
    },

    createTitle: function(position,item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:110,
            color:"#334465",
            value:item.title
        })
        var elementPosition=position
        elementPosition.y=-27
        entityEl.setAttribute("position",elementPosition)
        entityEl.setAttribute("visible",true)

        return entityEl
    }
})