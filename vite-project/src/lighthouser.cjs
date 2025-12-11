export default {
    ci: {
        collect: {
            staticDisDir './dist';

        },
        upload:{
            target: 'temporary-public-storage',  
        },
    },
}