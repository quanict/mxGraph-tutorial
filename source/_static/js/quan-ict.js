var demo = {
    init: function() {
        this.generate();

        let dir = this.getDir();
        if( dir == 'examples'){
            let basename = this.getFilename();
            console.log("basename",basename)
            demo.addScript("../_static/demo/"+basename+".js");

            // find object
            var fn = window[basename];

            // is object a function?
            if (typeof fn === "function"){
                let demo = document.getElementById('graphContainer')
                fn(demo);
            };
        }
    },
    
    getFilename : ()=>{
        let url = window.location.pathname,
                filename = url.substring(url.lastIndexOf('/')+1),
                basename = filename.substring(0,filename.lastIndexOf('.'));
                // basename = basename.replace(['-'],'_');
        return basename;
    },

    getDir:()=>{
        let url = window.location.pathname,
                path = url.substring(0,url.lastIndexOf('/')),
                dir_name = path.substring(path.lastIndexOf('/')+1);
        
        return dir_name;
    },

    generate:()=>{
        if( $('.highlight-html-demo').length > 0){
            $('.highlight-html-demo').each((index,e)=>{
                $(e).html('')
                    .attr('id','graphContainer')
                    .css({width:'100%',height:500})
                
                e.classList.add('demo-area');
            });
        }
    },

    addScript:(src)=>{
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;    

        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

$(document).ready(()=>{
   demo.init();
});
