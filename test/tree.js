const childprocess = require('child_process');
const kill = require('tree-kill');


describe('launch, kill, launch, kill', function(){
  let testrpcProcess;

  it('launches', function(done){

      const command = './node_modules/ethereumjs-testrpc-sc/build/cli.node.js ';

      // Launch
      testrpcProcess = childprocess.exec(command);

      // Resolve when testrpc logs that it's listening.
      testrpcProcess.stdout.on('data', data => {
        console.log(data);
        if (data.includes('Listening')) {
          console.log(`Launched testrpc: ${testrpcProcess.pid}`);
          done();
        }
      });

  })

  it('kills', function(done){
    kill(testrpcProcess.pid, function(err){
      console.log('err --> ' + err);
      console.log(`Killed process: ${testrpcProcess.pid}`);
      done();
    });
  });

  it('launches again', function(done){

      const command = './node_modules/ethereumjs-testrpc-sc/build/cli.node.js ';

      // Launch
      testrpcProcess = childprocess.exec(command);

      // Resolve when testrpc logs that it's listening.
      testrpcProcess.stdout.on('data', data => {
        console.log(data);
        if (data.includes('Listening')) {
          console.log(`Launched testrpc: ${testrpcProcess.pid}`);
          done()
        }
      });
  });

  it('kills', function(done){
    kill(testrpcProcess.pid, function(err){
      console.log('err --> ' + err);
      console.log(`Killed process: ${testrpcProcess.pid}`);
      done();
    });
  });
})