const withPWA = require('next-pwa');


module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	}
});

module.exports = {
    async redirects(){
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true
            }
        ]
    }
}



