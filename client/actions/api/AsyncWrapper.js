export default function AsyncWrapper(funct) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(funct());
        }, Math.random() * 1000);
    });
}