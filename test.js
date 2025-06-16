import "node_modules/pp-is/dist/pp-is.min.js"
import "node_modules/pp-events/dist/pp-events.nd.min.js"

const is = ppIs,
events = ppEvents,
padLeft=(str,n)=>{
	const emptyspace = " ";
	return emptyspace.repeat(n)+str
},

log = (str,n=0)=>{console.log(padLeft(str,n))},

arg = function(args,opt){	
	let self = this
	self._arg = is.isArray(args) ? args.splice(1,args.length) : [];
	self._title = is.isNil(opt.title) ? "" : opt.title
	self._version = is.isNil(opt.version) ? "1.0.0" : opt.version
	self._events = events()
	self._flags = [];

	self.register = (flag,opt)=>{
		self._flags.push({
			"name":is.isArray(flag) ? flag.join(", ") : flag ,
			"desc":opt.desc			
		})
		is.isFunction(opt.on) && self.on(flag,opt.on)		
	}

	self.on=(flags,fn)=>{
		if(is.isArray(flags))
			for(let flag of flags)				
				self._events.on(flag,fn)
	}
	self.exec =()=>{
		for(let flag of self._arg){
			const [strFlag,vlFlag] = flag.split("=")			
			self._events.checkOn(strFlag) && self._events.emit(strFlag,vlFlag)			
		}
	}

	self.version=()=>log("version "+self._version,1)

	self.help=()=>{		
		log("\n Welcome to \u001B[32m"+self._title+"\u001B[39m");
		log("Version 1.0.0\n",1);
		log("Usage: myprogram [OPTIONS]\n",4);
		log("Options:\n",4);
		for(const flag of self._flags )
			log(flag.name+"                       "+flag.desc,4);		
		log("-h, --help                       Show help",4);
		log("-v, --version                    Show version\n",4);
	}
	self.emptyArg=()=>{
		log(self._title+": Try '"+self._title+" --help' for more information");
	}
	self.on(["--help","-h"],self.help)
	self.on(["--version","-v"],self.version)
	self._arg.length == 0 && self.emptyArg()
}

const _arguments = !is.isNil(scriptArgs) ? scriptArgs : [];

const parser = new arg(_arguments,{
	title:"myProgram",
	version:"1.0.0",
	desc:""
})
parser.register(["-t","--time"],{	
	"desc":"Show Time in system",
	"on":(value)=>{
		console.log("::",value);
	}
})

parser.on(["--time","-t"],function(value){	
	console.log("Value from --time es :",value)
})
parser.on(["--calendar","-c"],function(vl){	
	console.log(vl);
})
parser.exec();
