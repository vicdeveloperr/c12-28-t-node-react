import { useUserStore } from "../stateManagemet/stores";

export default function useLoadUserData() {
    const { getUser, userData } = useUserStore(state => state);
    getUser();

    return userData;
}