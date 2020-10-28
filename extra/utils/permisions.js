import {permissions} from "../utils/constants"

export default function hasPermission(moduleName,role,permissionType)
{
console.log(permissions[moduleName][permissionType].includes(role)); //using bracket operator

}

hasPermission('getUsers',"trainer","read");
hasPermission('getUsers',"trainee","write");
