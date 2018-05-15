var commentBase = {
    nameBase: [],
    commentBase: [],
    
    
    
    
    init: function(){
        this.cacheDom();
        this.bindEvents();        
    },
    cacheDom: function(){
    this.$el = $("#commentBox");
    this.$button = this.$el.find("button");
    this.$list = this.$el.find("#commentPrep");
    this.$inputName = this.$el.find("input");
    this.$input = this.$el.find("textarea");
    this.$form = this.$el.find("form");
    this.$php = this.$form.find("#jp");
 

    },
       bindEvents: function(){
        this.$button.on('click', this.addComment.bind(this));


        
    
},
    
    
    
    render: function(){
        var data = {
            nameBase: this.nameBase,
            commentBase: this.commentBase,

        };
 var name = this.$list.append("<div>"+this.nameBase[0]+"</div>")
 var comment = this.$list.append("<h>"+this.commentBase[0]+"</h>")

    },
    
    addName: function(){
        var name =this.$inputName.val();
        
        if(name==""){
         alert("podaj nazwę")
        return false;
        }else{
            this.nameBase.unshift(name+' ');
        this.render();
        this.$inputName.val(' ');
        this.$input.val('');

            this.phpSend()
        }


    
     },  
    addComment: function(){
        var name =this.$input.val();
        if(name==""){
        alert("podaj treść kometarza")
        return false;}
        else{
             this.commentBase.unshift(name+' ');
            this.addName()
        }
        


    
     }, 
    phpSend: function(){
        var getData = this.$list.html().toString();
        this.$php.val(getData);
        console.log(this.$php.val());
        this.$form.submit()
        }
    

    
} 





var styling = {
    
    
    init: function(){
        this.cacheDom()
        this.hidePhpForm()
        this.loadComments()
        
    },
    cacheDom: function(){
    this.$form = $("#form1");
    this.$comment = $("#commentPrep");
    this.$comments = $("#commentsToLoad");

},
    
    hidePhpForm: function(){
   this.$form.toggle();
   this.$comment.toggle();

        console.log("toggle");

        
        
    }, 
    loadComments: function(){
        this.$comments.load("comments.txt")
        
    }
    
    
}
styling.init()

     




