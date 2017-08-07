import pageAction from '../constants/PageActions';

export function openDrawer() {
    return {
        type: pageAction.DRAWER_OPEN
    };
};

export function closeDrawer() {
    return {
        type: pageAction.DRAWER_CLOSE
    };
};
