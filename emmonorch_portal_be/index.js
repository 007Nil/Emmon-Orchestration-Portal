const express = require('express');
const { exec } = require('child_process')
const app = express();

app.get('/get_active_mom_data', (req, res) => {

    exec("pbsnodes -a", (error, stdout, stderr) => {
        if (error) {
            // console.log(`error: ${error.message}`);
            console.log(error)
            return;
        }
        if (stderr) {
            console.log("Std Error")
            return;
        }
        let return_json_data = []
        let cmd_output_array = stdout.split("\n\n")
        cmd_output_array.pop();
        cmd_output_array.forEach(element => {

            // let mom_node_obj = new MomDetails();
            let vm_name = ""
            let mem = ""
            let cpu = ""
            let jobs = ""
            // console.log("-----------")
            let item = element.replace(/\s/g, ' ')
            // console.log(item)
            let arrayFilter = item.split('  ').filter(el => {
                return el != null && el != '';
            });
            arrayFilter.forEach(element => {
                // console.log(element)
                if (element.includes("Mom =")) {
                    // console.log(element)
                    vm_name = element.split("=")[1].replace(/\s/g,'')
                    // console.log(vm_name)
                }
                else if (element.includes("resources_assigned.mem")) {
                    mem = element.split("=")[1].replace(/\s/g,'')
                }
                else if (element.includes("resources_assigned.ncpus")) {
                    cpu = element.split("=")[1].replace(/\s/g,'')
                }
                else if (element.includes("jobs")) {
                    jobs = element.split("=")[1].replace(/\s/g,'')
                }
            });
            if (vm_name && cpu && jobs && mem) {
                return_json_data.push(new MomDetails(vm_name,mem,cpu,jobs));
            }

            console.log(return_json_data)
        });

        // console.log(return_json_data)
        res
            .status(200)
            .send(return_json_data)
            .end();
    });
});

class MomDetails {
    constructor(vm_name, mem, cpu, jobs) {
        this.vm_name = vm_name;
        this.mem = mem;
        this.cpu = cpu;
        this.jobs = jobs;
    }
}

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '10.8.40.50', () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});