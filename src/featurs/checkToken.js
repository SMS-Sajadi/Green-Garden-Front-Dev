import { get } from "../services/api"
export const checkToken = () => {
    const res = get('token_check/');
    var result;

    if(res.status === 200)
        result = {is_garden_owner: res.data.is_garden_owner, user_id: res.data.user_id}
    else
        result = false;

    return result
        
}