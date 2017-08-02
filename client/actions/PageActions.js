import drawer from '../constants/PageActions';

export function openDrawer() {
    return {
        type: drawer.OPEN
    };
};

export function closeDrawer() {
    return {
        type: drawer.CLOSE
    };
};
