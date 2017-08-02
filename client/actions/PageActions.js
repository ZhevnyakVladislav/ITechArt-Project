import drawer from '../constants/PageActions';

export function openDrawer() {
    document.getElementById('drawer-overlay').classList.remove('hidden');
    document.getElementById('drawer-overlay').classList.add('visible::after');
    document.getElementById('drawer').classList.remove('close');
    document.getElementById('drawer').classList.add('open');
    return {
        type: drawer.OPEN
    };
};

export function closeDrawer() {
    document.getElementById('drawer-overlay').classList.remove('visible');
    document.getElementById('drawer-overlay').classList.add('hidden');
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('drawer').classList.add('close');
    return {
        type: drawer.CLOSE
    };
};
