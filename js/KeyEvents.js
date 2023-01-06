AFRAME.registerComponent("key-events",{
    schema:{

    },

    init:function(){
        window.addEventListener("keydown",(e)=>{
            const env = document.querySelector("#environment")
            var envPos = env.getAttribute("position")
            var envRot = env.getAttribute("rotation")
            var posZ = envRot.z

            if(e.key === "ArrowUp"){
                posZ=posZ+2
                env.setAttribute("rotation",{x:envRot.x,y:envRot.y,z:posZ})
            }
        })
    }

})