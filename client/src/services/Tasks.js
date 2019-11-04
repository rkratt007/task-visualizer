import Api from "@/services/Api";

export default {
  async get_tasks(user) {
    let response = await Api().get("tasks/by_user/" + user);
    if (response.data.code == "200") {
      response = await response.data.result.Output;
    }
    return response;
  },
  async get_all_tasks() {
    let response = await Api().get("tasks");
    let owners = [],
        i = 0,
        c = 0,
        max_hrs = [],
        max_time = 0,
        s_ip = [],
        s_c = [],
        s_ns = [],
        respons_arry = {
          owners: [""],
          ns: [0],
          c: [0],
          ip: [0],
          max: 0
        };

    if (response.data.code == "200") {
      response = await response.data.result.Output;

      // getting the owners
      for (i = 0; i < response.length; i++) {
        let obj = response[i];
        if (!owners.includes(obj.tasks_owners)) {
          owners.push(obj.tasks_owners);
        }
      }

      for (i = 0; i < owners.length; i++) {
        for (c = 0; c < response.length; c++) {
          if (c == 0) {
            s_ip.push(0);
            s_c.push(0);
            s_ns.push(0);
            max_hrs.push(0);
          }
          if (owners[i] == response[c].tasks_owners) {
            max_hrs[i] = max_hrs[i] * 1 + response[c].tasks_time * 1;
            switch (response[c].task_status) {
              case "Not Started":
                s_ns[i] = s_ns[i] * 1 + response[c].tasks_time * 1;
                break;
              case "Completed":
                s_c[i] = s_c[i] * 1 + response[c].tasks_time * 1;
                break;
              case "In Progress":
                s_ip[i] = s_ip[i] * 1 + response[c].tasks_time * 1;
                break;
            }
          }
        }
      }

      for (i = 0; i < max_hrs.length; i++) {
        if (max_hrs[i] > max_time) {
          max_time = max_hrs[i] * 1;
        }
      }

      respons_arry = {
        owners: owners,
        ns: s_ns,
        c: s_c,
        ip: s_ip,
        max: max_time * 1 + 10
      };
    }
    return respons_arry;
  },
  async del_tasks(id) {
    let response = await Api().get("delete/" + id);
    console.log(response);
    return response;
  },
  async get_task_byid(id) {
    let response = await Api().get("tasks/" + id);
    if (response.data.code == "200") {
      response = await response.data.result.Output;
    }
    return response;
  },
  async set_task_byid(id,form) {
    console.log(form);
    let response = await Api().post("tasks/update/" + id ,form);
    if (response.data.code == "200") {
      response = await response.data.result.Output;
    }
    return response;
  },
  async install_sample_tasks() {
    await Api().get("tasks/sample/install");
  },
  async delete_sample_tasks() {
    await Api().get("tasks/sample/delete");
  },
};
