import Time from "../models/Time";


async function CheckTable(name : string, data : string, index : number) {

    const check = await Time.findOne({name : name, data : data}).lean()

    
    const output = check?.values[index]["output"]

    if(output == ""){
        return true
    }else{
        return false
    }

}

async function CloneTable(name : string, data : string, index : number) {

    const check = await Time.findOne({name : name, data : data}).lean()

    
    const output = check?.values

    return output

}


export {CheckTable, CloneTable}