<script>
    window.detectBrowserZoom = (dotnetHelper) => {
        let lastZoom = window.devicePixelRatio;

        const checkZoom = () => {
            const zoom = window.devicePixelRatio;
    if (zoom !== lastZoom) {
        lastZoom = zoom;
    dotnetHelper.invokeMethodAsync('OnBrowserZoomChanged', zoom);
            }
        };

    window.addEventListener('resize', checkZoom);
    window.addEventListener('wheel', checkZoom, {passive: true });
    setInterval(checkZoom, 500);
    };
</script>
