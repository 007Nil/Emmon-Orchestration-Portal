const express = require('express');
const { exec } = require('child_process')
const app = express();

app.get('/get_active_mom_data', (req, res) => {
    let pbsnodes_cmd = exec("pbsnodes -a")
    let cmd_output_array = [];
    pbsnodes_cmd.stdout.on('data', function(data){
        let return_json_data = [ ]
        let mom_details_obj = { }
        cmd_output_array = data.split("\n")
        // console.log(cmd_output_array)
        cmd_output_array.forEach(element => {
            let item = element.replace(/\s/g, '')
            if (item.includes("Mom=")){
                // console.log(item)
                mom_details_obj.vm_name = item
                return_json_data.push(mom_details_obj)
            }
            else if (item.includes("resources_assigned.mem")){
                // console.log(item)
                mom_details_obj.mem = item
            }
            else if (item.includes("resources_assigned.ncpus")){
                // console.log(item)
                mom_details_obj.cpu = item

            }
            else if (item.includes("jobs")){
                mom_details_obj.jobs = item
            }
        });
        
        console.log(return_json_data)
        res
        .status(200)
        .send("TEST")
        .end();
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '10.8.40.50', () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});