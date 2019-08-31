const exec = require('child_process').exec;

let reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', function(line) {
  console.log(`[Node]${line}`);

  if(line.match(/connected/)) {
    // do backup
    do_backup();
  }
});

function do_backup() {
  exec("zip -r backups/minecraft_`date +%Y%m%d-%H%M%S`.zip worlds/", (err, stdout, stderr) => {
    if (err) { console.log(err); }
    console.log(stdout);
  });
}
