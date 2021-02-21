import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
import Projects from '@/views/Projects/Projects'
import Notes from '@/views/Notes/Notes'
import About from '@/views/About/About'
import Publish from '@/views/Publish/Publish'
import Post from '@/views/Post/Post'
import Canvas from '@/views/Canvas/Canvas'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      index: 1
    },
    component: Home
  },
  {
    path: '/Projects',
    name: 'Projects',
    meta: {
      index: 2
    },
    component: Projects
  },
  {
    path: '/Notes',
    name: 'Notes',
    meta: {
      index: 3,
    },
    component: Notes
  },
  {
    path: '/About',
    name: 'About',
    meta: {
      index: 4,
    },
    component: About
  },
  {
    path: '/Publish',
    name: 'Publish',
    meta: {
      index: 5,
    },
    component: Publish
  },
  {
    path: '/Post/:postId',
    name: 'Post',
    meta: {
      index: 6,
    },
    component: Post,
    props: true
  },
  {
    path: '/Canvas',
    name: 'Canvas',
    meta: {
      index: 7,
    },
    component: Canvas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
