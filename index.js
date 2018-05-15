var scroll = {
    sections: ['#about','#skills','#projects','#comments','#contact'],
    
    init: function(){
        
        this.cacheDom();
        this.bindEvents();
       setInterval( this.activateByPosition , 100)
        
    },
    
    cacheDom: function(){
        this.$nav=$("nav");
        this.$button=this.$nav.find("#button");
        this.$about = this.$nav.find("#about");
        this.$comments =this.$nav.find("#comments");
        this.$skills = this.$nav.find("#skills");
        this.$contact = this.$nav.find("#contact");
        this.$projects = this.$nav.find("#projects");
        this.$position = $(document).scrollTop();
        this.section = this.position;

            


    },
    activateByPosition: function(){
                        scroll.activate(scroll.sections[scroll.position()])

    },
    
    activate: function(id){
        this.$buttonActive=$(".active");
        this.$buttonActive.toggleClass("active");
        $(id).toggleClass("active");

    },
    
    
    
    activateByClick: function(event){
       
        
        this.$element = $(event.target).parent(); 
        this.activate(this.$element);
        this.$elementId = this.$element.attr('id');
        this.$elementScrollTo = $("."+this.$elementId).offset();
        $(document).scrollTop(this.$elementScrollTo.top);

},
    
    
    
    bindEvents: function(){
        
        this.$nav.on('click', this.activateByClick.bind(this));
    

},
    

   
    
    
    
    position: function(){
    
       
        $contactSection = $(".contact").offset();
        this.$position = $(document).scrollTop();
        var section = this.s;
        
        
        if(this.$position<=$contactSection.top/3){
                   section = 0;
        }else{
             if(this.$position<=$contactSection.top*2.8/5){
                    section = 1;
             }else{
             if(this.$position<=$contactSection.top*3.8/5){
                    section = 2;

             }else{
             if(this.$position<=$contactSection.top*4.3/5){
                    section = 3;
             }else{
                    section = 4;

             }
        }
            

        
}}
        
        return section;
    },
    
    
      
    
   
 
    
}
  scroll.init();




