import React, { useEffect, useState } from "react";

import Page from "../components/Page";
import Card from "../components/Card";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";

import axios from "axios";
import { API_URL } from "../config.mjs";

const Assets = () => {
  const [showModal, setShowModal] = useState(false);

  const [mouse, setMouse] = useState(null);
  const [keyboard, setKeyboard] = useState(null);
  const [monitor, setMonitor] = useState(null);
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keyboardRes = await axios.get(
          `${API_URL}/asset/category/keyboard`
        );
        const mouseRes = await axios.get(`${API_URL}/asset/category/mouse`);
        const monitorRes = await axios.get(`${API_URL}/asset/category/monitor`);
        const laptopRes = await axios.get(`${API_URL}/asset/category/laptop`);

        setKeyboard(keyboardRes.data.data);
        setMouse(mouseRes.data.data);
        setMonitor(monitorRes.data.data);
        setLaptop(laptopRes.data.data);

        console.log("keyboard", keyboardRes.data.data);
        console.log("mouse", mouseRes.data.data);
        console.log("monitor", monitorRes.data.data);
        console.log("laptop", laptopRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Assets</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Assets</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
        >
          Add Asset
        </button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card amount={mouse && mouse.length} title="Mouse" to="/assets/mouse" />
        <Card
          amount={keyboard && keyboard.length}
          title="Keyboard"
          to="/assets/keyboard"
        />
        <Card
          amount={monitor && monitor.length}
          title="Monitor"
          to="/assets/monitor"
        />
        <Card
          amount={laptop && laptop.length}
          title="Laptop"
          to="/assets/laptop"
        />
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title="Add Asset"
        onClick={() => {
          setShowModal(false);
          alert("asset added");
        }}
      >
        <FormField
          label="Asset Name"
          placeholder="Mouse / Keyboard / Laptop / Monitor"
        />
        <FormField label="No of Units" placeholder="Enter units in digit" />
      </ModalForm>
    </Page>
  );
};

export default Assets;
