import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
  ;

  collectionRef.onSnapshot((snap) => {
    let results = [];
    // console.log(snap.docs);
    snap.docs.forEach((doc) => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
    });

    // console.log(results);

    documents.value = results;
    error.value = null;
  }, (err) => {
    console.log(err.message);
    documents.value = null;
    error.value = 'Could not fetch the data';
  });

  return { documents, error };
};

export default getCollection;
