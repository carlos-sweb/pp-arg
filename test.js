import "node_modules/pp-is/dist/pp-is.min.js"
import "node_modules/pp-events/dist/pp-events.nd.min.js"

const is = ppIs;
const events = ppEvents;


const padLeft=(str,n)=>{
	const emptyspace = " ";
	return emptyspace.repeat(n)+str
}

const log = (str,n=0)=>{console.log(padLeft(str,n))}

const arg = function(args,opt){	
	let self = this
	this._arg = is.isArray(args) ? args.splice(1,args.length) : [];
	this._title = is.isNil(opt.title) ? "" : opt.title
	this._version = is.isNil(opt.version) ? "1.0.0" : opt.version
	this._events = events()

	this._flags = [];

	this.register = function(flag,opt){
		this._flags.push({
			"name":flag.join(", "),
			"desc":opt.desc			
		});
		is.isFunction(opt.on) && this.on( flag , opt.on )		
	}

	self.on=(flags,fn)=>{
		if(is.isArray(flags))
			for(let flag of flags)				
				self._events.on(flag,fn)
	}
	self.exec =()=>{
		for(let flag of self._arg)
			self._events.checkOn(flag) && self._events.emit(flag)			
	}

	self.version=()=>log("version "+self._version,1)

	this.help=function(){		
		log("\n Welcome to \u001B[01m\u001B[32m"+this._title+"\u001B[39m");
		log("Version 1.0.0\n",1);
		log("Usage: myprogram [OPTIONS]\n",4);
		log("Options:\n",4);
		for(const flag of this._flags )
			log(flag.name+"                       "+flag.desc,4);		
		log("-h, --help                       Show help",4);
		log("-v, --version                    Show version\n",4);
	}
	this.emptyArg=function(){
		log(this._title+": Try '"+this._title+" --help' for more information");
	}
	this.on(["--help","-h"],this.help.bind(this))
	this.on(["--version","-v"],this.version.bind(this))
	this._arg.length == 0 && this.emptyArg()
}

const _arguments = !is.isNil(scriptArgs) ? scriptArgs : [];

const parser = new arg(_arguments,{
	title:"myProgram",
	version:"1.0.0",
	desc:""
})
parser.register(["-t","--time"],{
	"desc":"Show Time in system",
	"on":function(){

	}
});
parser.on(["--time","-t"],function(){	
	const days = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]
	const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]	
	console.log(" -> Hoy es :",days.at(new Date().getDay()),"del mes", months.at(new Date().getMonth()),"Año ",new Date().getYear() );	
});

parser.on(["--calendar","-c"],function(){	
	const days = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]
	const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]	

	const green=(str)=>{
		return "\u001B[01m\u001B[32m"+str+"\u001B[39m"
	}
	const blue=(str)=>{
		return "\u001B[01m\u001B[34m"+str+"\u001B[39m"
	}
	const silver=(str)=>{
		return "\u001B[01m\u001B[30m"+str+"\u001B[39m"
	}

	log("");
	log("|-----------------------------------------|",5)
	log("| Calendar Month: Julio                   |",5)	            
	log("|-----------------------------------------|",5)
	log("| Lun | Mar | Mie | Jue | Vie | Sab | Dom |",5)
	log("|-----------------------------------------|",5)
	log("|  "+silver("31")+" | "+blue("01")+"  | "+blue("02")+"  | "+blue("03")+"  | "+blue("04")+"  | "+green("05")+"  | "+green("06")+"  |",5)
	log("|-----------------------------------------|",5)
	log("|  "+blue("07")+" | "+blue("08")+"  | "+blue("09")+"  | "+blue("10")+"  | "+blue("11")+"  | "+green("12")+"  | "+green("12")+"  |",5)
	log("|-----------------------------------------|",5)
	log("|  "+blue("14")+" | "+blue("15")+"  | "+blue("16")+"  | "+blue("17")+"  | "+blue("18")+"  | "+green("19")+"  | "+green("20")+"  |",5)
	log("|-----------------------------------------|",5)
	log("|  "+blue("21")+" | "+blue("22")+"  | "+blue("23")+"  | "+blue("24")+"  | "+blue("25")+"  | "+green("26")+"  | "+green("27")+"  |",5)
	log("|-----------------------------------------|",5)
	log("|  "+blue("28")+" | "+blue("29")+"  | "+blue("30")+"  | "+blue("31")+"  | "+silver("01")+"  | "+silver("02")+"  | "+silver("03")+"  |",5)
	log("|-----------------------------------------|",5)
	log("");


});

parser.exec();




