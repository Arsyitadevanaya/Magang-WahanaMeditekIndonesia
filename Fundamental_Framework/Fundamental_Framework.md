# Fundamental Framework Vue.Js 3

Table of Content
- [Pendahuluan Vue.js](#pendahuluan)
- [API Style](#style)
  - [Option API](#option)
  - [Composition API](#composition)
- [Form Input Binding Vue](#operator)
- [Conditional Rendering Vue](#pengondisian)
- [Event Handling](#event-handling)
- [List Rendering](#list-rendering)
- [Computed Proprties](#computed-properties)
- [Class dan Style Binding](#fungsi)
- [Lifecycle Hooks](#lifecycle)
- [Watchers](#watchers)
- [Component](#component)
  - [Registrasi Component](#registrasi)
  - [Props Component](#props)
  - [Emit Component Event](#emits)
  - [Slot Component](#slot)
  - [Provide Inject Component](#inject)
- [Router](#router)
  - [Instalasi](#instalasi)
  - [Konfigurasi](#konfigurasi)
  - [Integrasi Router dengan Aplikasi Vue](#integrasi)
  - [Penggunaan Router Link dan Router View](#link-view)
  - [Menambahkan Rute Dinamis dan Parameter](#dinamis-route)
  - [Navigasi Programatik](#navigasi-pragmatik)

<a name="pendahuluan"></a>
## Pendahuluan Vue.js
kerangka kerja JavaScript untuk membangun antarmuka pengguna. Kerangka kerja ini dibangun di atas HTML, CSS, dan JavaScript standar dan menyediakan model pemrograman berbasis komponen deklaratif yang membantu mengembangkan antarmuka pengguna dengan kompleksitas apa pun secara efisien.

<a name="style"></a>
## API Style
Komponen Vue dapat dibuat dalam dua gaya API yang berbeda: Options API dan Composition API .

<a name="option"></a>
### API Option
   API Component mendefinisikan logika komponen menggunakan objek opsi seperti data, methods, dan mounted. Properti yang didefinisikan oleh opsi diekspos di dalam fungsi, yang mengarah ke instans komponen. Contoh:
   ```
    <script>
    export default {
      data() {
        return {
          count: 0
        }
      },
      methods: {
        increment() {
          this.count++
        }
      },
      mounted() {
        console.log(`The initial count is ${this.count}.`)
      }
    }
    </script>
   ```

<a name="composition"></a>
### Composition API
   Coposition API mendefinisikan logika komponen menggunakan fungsi API yang diimport. Composition API digunakan dengan ``<script srtup>``. ``setup`` Atribut merupakan petunjuk yang membuat vue melakukan tranformasi waktu kompilasi yang memungkinkan menggunakanm composition API.
   Contoh :
   ```
   <script setup>
   import { ref, onMounted } from 'vue'
   const count = ref(0)
   function increment() {
     count.value++
   }
   onMounted(() => {
     console.log(`The initial count is ${count.value}.`)
   })
   </script>
   ```
## Form Input Binding Vue
### Binding Sederhana dengan v-model
Cara yang paling umum dan sederhana untuk mengikat input adalah dengan menggunakan direktif v-model. Direktif ini memungkinkan pengikatan dua arah (two-way data binding) antara elemen input dan data.
contoh: ``<input v-model="message" placeholder="Enter a message">``

### Input Tipe yang Berbeda
v-model dapat digunakan dengan berbagai jenis input seperti text, checkbox, radio, dan select.
1. checkbox : ``<input type="checkbox" v-model="checked">``
2. Radio : ``<input type="radio" value="Option1" v-model="picked">``
3. Select: ``<select v-model="selected">``

### Modifiers
Vue.js menyediakan beberapa modifier untuk v-model untuk memudahkan penanganan input.
1. ``.lazy``
   Mengubah input hanya ketika event change terjadi, bukan input.
   ```
   <input v-model.lazy="message" placeholder="Enter a message">
   ```
2. ``.number``
   Secara otomatis mengonversi input menjadi angka.
   ```
   <input v-model.number="age" type="number" placeholder="Enter your age">
   ```
3. ``.trim``
   Secara otomatis menghapus spasi di awal dan akhir input.
   ```
   <input v-model.trim="message" placeholder="Enter a message">
   ```
<a name="pengondisian"></a>
## Conditional Rendering Vue
Conditional rendering dalam Vue.js 3 adalah teknik untuk menampilkan atau menyembunyikan elemen dalam DOM berdasarkan kondisi tertentu. Vue.js menyediakan beberapa direktif untuk conditional rendering, termasuk ``v-if``, ``v-else-if``, ``v-else``, dan ``v-show``. Berikut adalah penjelasan.

1. ``v-if``
   Direktif v-if digunakan untuk merender elemen secara kondisional. Elemen hanya akan dirender jika ekspresi yang diberikan bernilai true.
2. ``v-else-if`` dan ``v-else``
   Direktif v-else-if dan v-else digunakan bersama dengan v-if untuk mengelola beberapa kondisi. v-else-if akan dirender jika kondisi sebelumnya (v-if atau v-else-if) bernilai false dan kondisinya sendiri bernilai true. v-else akan dirender jika semua kondisi sebelumnya (v-if atau v-else-if) bernilai false.
3. ``v-show``
   Direktif v-show juga digunakan untuk merender elemen secara kondisional, tetapi berbeda dengan v-if, elemen selalu dirender dalam DOM dan hanya properti CSS display yang diubah berdasarkan kondisinya.

<a name="event-handling"></a>
## Event Handling 
Event handling dalam Vue.js 3 adalah cara untuk menangani event DOM seperti klik, input, submit, dan lainnya. Vue.js menyediakan cara yang sederhana dan intuitif untuk menangani event-event ini dengan menggunakan direktif v-on atau shorthand @.
1. Contoh penggunaan v-on:
   ```
   <button v-on:click="handleClick">Click me</button>
   ```
2. Contoh penggunaan @ :
   ```
   <button @click="handleClick">Click me (shorthand)</button>
   ```

### Event Modifiers
Beberapa Event Modifiers
1. ``.stop``: Memanggil event.stopPropagation().
2. ``.prevent``: Memanggil event.preventDefault().
3. ``.capture``: Menambahkan event listener dalam mode capture.
4. ``.self``: Hanya memicu handler jika event dipicu oleh elemen itu sendiri.
3. ``.once``: Menjalankan handler maksimal sekali.

<a name="list-rendering"></a>
## List Rendering
List rendering dalam Vue.js 3 adalah teknik untuk merender elemen-elemen dalam daftar secara dinamis berdasarkan data yang ada. Vue.js menyediakan direktif v-for untuk mengulangi elemen berdasarkan daftar atau objek. 
1. Menggunakan ``:key``
   ```
   <li v-for="item in items"
       :key="item.id">
   {{ item }}
   </li>
   ```
2. Untuk mengakses posisi dalam array
   ```
   <li v-for="(item, index) in items">...
   ```
3. Untuk mealukan perulangan object
   ```
   <li v-for="(value, key) in object">...
   ```
5. Menggunakan v-for dengan komponene
   ```
   <cart-product v-for="item in products"
             :product="item"
             :key="item.id">
   ```
   
<a name="computed-properties"></a>
## Computed Proprties
Computed properties didefinisikan dalam objek computed dari sebuah komponen Vue. Computed Properties bisa berupa fungsi getter saja atau kombinasi getter dan setter. Computed Properties mirip dengan metode, tetapi berbeda dalam hal caching dan efisiensi.
contoh:
```
computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
```
### Computed dengan Getter Setter
```
computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
```

<a name="fungsi"></a>
## Class dan Style Binding
Class dan style binding dalam Vue.js 3 adalah cara untuk mengikat kelas CSS dan gaya inline ke elemen DOM secara dinamis berdasarkan data atau kondisi dalam Vue instance atau komponennya. Ini memungkinkan untuk mengubah tampilan elemen berdasarkan status aplikasi dengan cara yang deklaratif dan reaktif.
### Class Binding
Class binding digunakan untuk mengikat kelas CSS ke elemen. 
1. Menggunakan Objek:  ``:class="{ active: isActive, 'text-danger': hasError }"``
2. Menggunakan Array: ``:class="[isActive ? 'active' : '', hasError ? 'text-danger' : '']"``
3. Menggabungkan Objek dan Array: ``:class="[{ active: isActive }, 'static-class', errorClass]"``

### Style Binding
Style binding digunakan untuk mengikat gaya CSS inline ke elemen. 
1. Menggunakan Objek: ``:style="{ color: activeColor, fontSize: fontSize + 'px' }"``
2. Menggunakan Array: ``:style="[baseStyles, additionalStyles]"``

<a name="lifecycle"></a>
## Lifecycle Hooks
Lifecycle hooks adalah metode yang dipanggil selama berbagai tahap siklus hidup komponen. Ini memungkinkan pengembang untuk mengeksekusi kode pada saat yang tepat dalam siklus hidup komponen.
1. onBeforeMount
   Dipanggil sebelum komponen dipasang (mounted) ke DOM.
   ```
   import { onBeforeMount } from 'vue';
   onBeforeMount(() => {
       console.log('Component is about to mount');
   });
   ```
2. onMounted
   Dipanggil setelah komponen dipasang (mounted) ke DOM.
   ```
   import { onMounted } from 'vue';
   onMounted(() => {
       console.log('Component has been mounted');
   });
   ```
3. onBeforeUpdate
   Dipanggil sebelum komponen di-update.
   ```
   import { onBeforeUpdate } from 'vue';
   onBeforeUpdate(() => {
       console.log('Component is about to update');
   });
   ```
4. onUpdated
   Dipanggil setelah komponen di-update.
   ```
   import { onUpdated } from 'vue';
   onUpdated(() => {
       console.log('Component has been updated');
   });
   ```
5. onBeforeUnmount
   Dipanggil sebelum komponen dihapus dari DOM.
   ```
   import { onBeforeUnmount } from 'vue';
   onBeforeUnmount(() => {
       console.log('Component is about to be unmounted');
   });
   ```
6. onUnmounted
   Dipanggil setelah komponen dihapus dari DOM.
   ```
   import { onUnmounted } from 'vue';
   onUnmounted(() => {
       console.log('Component has been unmounted');
   });
   ```


<a name="watchers"></a>
## Watchers
Cara untuk merespon perubahan pada data reaktif atau properti terkomputasi di vue.js. Ada 2 jenis watchers: immediate watchers dan deep watchers.
### Basic watchers
Watchers dasar digunakan untuk merespon perubahan pada properti tertentu.
```
const { ref, watch } = Vue;

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

count.value = 1; // Triggers the watcher
```

### Immediate Watchrs
Watchers yang akan langsung dipanggil saat watch pertama kali di-setup, meskipun tidak ada perubahan pada data.
```
const { ref, watch } = Vue;

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`Count is ${newValue}`);
}, { immediate: true });
```

### Deep Watchers
Watchers yang dapat memantau perubahan pada objek nested.
```
const { ref, watch } = Vue;

const user = ref({
  name: 'John',
  details: {
    age: 30
  }
});

watch(user, (newValue, oldValue) => {
  console.log('User changed:', newValue);
}, { deep: true });

user.value.details.age = 31; // Triggers the watcher
```

<a name="component"></a>
## Component
<a name="registrasi"></a>
### Registrasi Component
1. Registrasi global
   membuat komponen tersedia di seluruh aplikasi.
   - Tersedia di seluruh aplikasi tanpa perlu mengimpornya di setiap komponen.
   - Berguna untuk komponen yang sering digunakan seperti tombol dasar, header, dll.
3. Registrasi lokal
   menjaga ruang lingkup yang bersih dan mengurangi kemungkinan konflik nama.
   - Hanya tersedia di komponen yang mendefinisikannya, menjaga ruang lingkup komponen yang bersih.
   - Memudahkan pemeliharaan karena komponen hanya digunakan di tempat yang dibutuhkan.
  
<a name="props"></a>
### Props Component
Props adalah cara untuk mengirimkan data dari komponen induk ke komponen anak.
Contoh penggunaan Props: <br>
``Komponen induk``
```
<template>
  <div>
    <ChildComponent :name="userName" />
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      userName: 'John Doe'
    }
  }
}
</script>
```

``Komponen anak``
```
<template>
  <div>
    <h2>Welcome, {{ name }}!</h2>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
```

<a name="emits"></a>
### Emit Component Event
Emits adalah cara untuk mengirimkan data dari komponen anak ke komponen induk.
Contoh Penggunaan Emits: <br>
``Komponen anak``
```
<template>
  <div>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
  emits: ['myEvent'], // Menyatakan bahwa komponen ini akan mengirimkan event 'myEvent'
  methods: {
    handleClick() {
      this.$emit('myEvent', 'Hello from ChildComponent!');
    }
  }
}
</script>
```

``Komponen induk``
```
<template>
  <div>
    <ChildComponent @myEvent="handleMyEvent" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleMyEvent(payload) {
      this.message = payload;
    }
  }
}
</script>
```

<a name="slot"></a>
### Slot Component
Mekanisme untuk menyisipkan konten ke dalam komponen dari luar komponen tersebut.
Contoh penggunaan slot: <br>
``Komponen anak``
```
<template>
  <div class="card">
    <header class="card-header">
      <slot name="header">Default Header</slot> <!-- Slot bernama 'header' -->
    </header>
    <main class="card-body">
      <slot>Default Content</slot> <!-- Slot default -->
    </main>
    <footer class="card-footer">
      <slot name="footer">Default Footer</slot> <!-- Slot bernama 'footer' -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
```

``Komponen induk``
```
<template>
  <Card>
    <template v-slot:header>
      <h1>My Custom Header</h1>
    </template>

    <p>This is the main content of the card. You can put anything here.</p>

    <template v-slot:footer>
      <button>Click Me</button>
    </template>
  </Card>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card
  }
}
</script>
```

<a name="inject"></a>
### Provide Inject Component
Provide dan inject adalah fitur yang memungkinkan komponen untuk berbagi data secara hierarkis tanpa harus menggunakan props atau events secara eksplisit. Ini sangat berguna dalam kasus di mana data atau fungsionalitas harus diakses oleh banyak komponen pada berbagai level dalam pohon komponen.
Contoh penggunaan Provide Inject: <br>
``komponen induk``
```
<template>
  <div>
    <h1>Parent Component</h1>
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child
  },
  provide() {
    // Menyediakan data yang bisa diakses oleh komponen anak
    return {
      sharedData: 'This is shared data from Parent!'
    };
  }
}
</script>
```

``komponen anak``
```
<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ sharedData }}</p>
    <Grandchild />
  </div>
</template>

<script>
import Grandchild from './Grandchild.vue';

export default {
  components: {
    Grandchild
  },
  inject: ['sharedData'], // Mengakses data yang disediakan oleh Parent
}
</script>
```

``komponen grandchild``
```
<template>
  <div>
    <h3>Grandchild Component</h3>
    <p>{{ sharedData }}</p>
  </div>
</template>

<script>
export default {
  inject: ['sharedData'] // Mengakses data yang disediakan oleh Parent
}
</script>
```

<a name="router"></a>
## Router

<a name="instalasi"></a>
### Instalasi
Menggunakan npm:
```
npm install vue-router@next
```

Menggunakan yarn:
```
yarn add vue-router@next
```

<a name="konfigurasi"></a>
### Konfigurasi
```
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// Definisikan rute-rute aplikasi
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

// Buat instance router
const router = createRouter({
  history: createWebHistory(), // Menggunakan HTML5 History API
  routes
})

export default router
```

<a name="integrasi"></a>
### Integrasi Router dengan Aplikasi Vue
```
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // Daftarkan router
app.mount('#app')
```

<a name="link-view"></a>
### Penggunaan Router Link dan Router View
1. <router-link>: Komponen ini digunakan untuk membuat tautan navigasi yang terhubung dengan rute yang telah didefinisikan.
   ```
   <!-- Dalam komponen Vue -->
   <template>
     <nav>
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
     </nav>
     <router-view></router-view> <!-- Tempat di mana komponen terkait rute akan dirender -->
   </template>
   ```
3. <router-view>: Komponen ini digunakan untuk menampilkan komponen yang terkait dengan rute saat ini. Biasanya diletakkan di dalam template utama.
   
<a name="dinamis-route"></a>
### Menambahkan Rute Dinamis dan Parameter
```
// src/router/index.js
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: UserDetail } // Rute dinamis
]
```
Untuk mengambil parameter dalam komponen, Anda bisa menggunakan useRoute:
```
// src/components/UserDetail.vue
<template>
  <div>User ID: {{ userId }}</div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const userId = route.params.id

    return { userId }
  }
}
</script>
```

<a name="navigasi-progmatik"></a>
### Navigasi Programatik
```
// Di dalam komponen Vue
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    function goToAbout() {
      router.push('/about')
    }

    return { goToAbout }
  }
}
```











   











