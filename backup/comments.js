var nameBase = {
    base: [""],
    
    
    
    
    init: function(){
        this.cacheDom();
        this.bindEvents();
        this.render();
        
    },
    cacheDom: function(){
    this.$el = $("#commentBox");
    this.$button = this.$el.find("button");
    this.$list = this.$el.find("#commentPrep");
    this.$input = this.$el.find("input");
 

    },
       bindEvents: function(){
        this.$button.on('click', this.addProduct.bind(this));
        
    
},
    
    
    
    render: function(){
        var data = {
            base: this.base,
        };
 var element = this.$list.append("<div id=`name`>"+this.base[0]+"</div>")
    },
    
    addProduct: function(){
        var name =this.$input.val();
        this.base.unshift(name+' ');
        this.render();
        this.$input.val(' ');

    
     },   
    

    
} 
nameBase.init();


var commentBase = {
    base: [""],
    
    
    
    
    init: function(){
        this.cacheDom();
        this.bindEvents();
        this.render();
        
    },
        cacheDom: function(){
    this.$el = $("#commentBox");
    this.$button = this.$el.find("button");
    this.$list = this.$el.find("#commentPrep");
    this.$input = this.$el.find("textarea");
    this.$form = this.$el.find("form");
    this.$php = this.$form.find("#jp");
    },
       bindEvents: function(){
        this.$button.on('click', this.addProduct.bind(this));
        
    
},
    
    
    
    render: function(){
        var data = {
            base: this.base,
        };
 var element = this.$list.append("<div id=`comment`>"+this.base[0]+"</div>")
    },
    
    addProduct: function(){
        var name =this.$input.val();
        this.base.unshift(name+' ');
        this.render();
        this.$input.val('');
        this.phpSend();


    
     }, 
        phpSend: function(){
        var getData = this.$list.html().toString();
        this.$php.val(getData);
        console.log(this.$php.val());
        this.$form.submit()
        }
} 
commentBase.init();


var styling = {
    
    
    init: function(){
        this.cacheDom()
        this.hidePhpForm()
        this.loadComments()
        
    },
    cacheDom: function(){
    this.$form = $("form");
    this.$comment = $("#commentPrep");
    this.$comments = $("#comments");

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

     




