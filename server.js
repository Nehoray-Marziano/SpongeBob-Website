const express=require('express')
const port=3000
const myApp=express()


var BodyParser=require('body-parser');
var{PythonShell}= require('python-shell');

myApp.use(BodyParser.urlencoded({ extended: true}));

myApp.post('/sendmail',(req,res)=>{
    var options={
        mode:'text',
        pythonPath:'/usr/bin/python2.7',
        pythonOptions:['-u'],
        scriptPath:'/users/studs/bsc/2019/marziann/.html',
        args: [req.body.name,req.body.email,req.body.name+" (email address: " + req.body.email+") says: "+req.body.thoughts]// the arguments that will be sent through the python script
    };
    console.log(req.body);
    PythonShell.run('client.py', options, (error,messages)=>{
        if (error) throw error;//if there is an error, throw it!
        console.log('messages: %j',messages);
    });
})


myApp.listen(port, () => console.log(`Bikini Bottom is ready to hear your thoughts on port: ${port}!`));
