import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
//lazyloading
  {//lazyloading
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    alias : ['/home', '/portada', '/inicio' ]
  },

  {
    path: '/contacto',
    name: 'Contacto',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue'),
    alias : ['/contact', '/contactarme' ]
  },
 
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue'),
    alias : ['/historia' ]
  },

  {
    path: '/datos',
    name: 'Datos',
    component: () => import('../views/Datos.vue'),
    alias : ['/sobreautos' , '/Datos' , '/Dato', '/sobremi']
  },

  {
    // ACCESO A ADMINISTRADOR SIMPLE Y AVANZADO A TRAVES DE CHILDREN

    path: "/administrador",
    name: "Administrador",
    component: () =>
      import(/* webpackChunkName: "Administrador" */ "../components/Administrador.vue"),
      alias : ['/admin' , '/add' ],
      children: [{
        path: "simple",
        name: "Simple",
        component: () =>
        import(/* webpackChunkName: "simple" */ "../components/Simple.vue"),
        
      },
      {
        path: "avanzado",
        name: "Avanzado",
        component: () =>
        import(/* webpackChunkName: "avanzado" */ "../components/Avanzado.vue"),
      },
    ],
  },

  {
    path: '/post/:entrada',
    name: 'Post',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
   
    children: [
      {
        path: "Mensajes",
        name: "Mensajes",
        component: () =>
          import(
            /* webpackChunkName: "comentarios" */ "../components/Mensaje.vue"
          ),
      },
    ],
  },
  {
    path: '/',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
