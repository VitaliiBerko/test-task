import { FILTER } from "../constans/filter.constans";
import { STATUS } from "../constans/status";


export const userInitState ={
    users: null,
    status: STATUS.idle,
    filter: FILTER.showAll,
    followingStatus: {},
    followersCount: {}

}