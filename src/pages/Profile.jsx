import { useSelector } from "react-redux";

const Profile = () => {

  const tasks = useSelector((state) => state.taskStore.task)  //here i will call state.store a jei name a taskSlicer k store korchi, and .initialState er moddhe jei name a value dechi.

  console.log(tasks)

  return (
    <div>
      <h1>Profile </h1>
    </div>
  );
};

export default Profile;
