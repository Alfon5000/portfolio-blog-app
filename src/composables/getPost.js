import { ref } from "vue";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        post.value = { id: docSnap.id, ...docSnap.data() };
      } else {
        error.value = "The post not found!";
      }
    } catch (error) {
      error.value = error.messages;
    }
  };

  return { post, error, load };
};

export default getPost;
