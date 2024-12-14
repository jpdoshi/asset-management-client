import React, { useEffect, useRef, useState } from "react";

import Page from "../components/Page";
import Card from "../components/Card";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";

import axios from "axios";
import { API_URL } from "../config.mjs";
import FormDropdown from "../components/FormDropdown";
import FormTextArea from "../components/FormTextArea";

const Assets = () => {
  const [showModal, setShowModal] = useState(false);
  const [assetType, setAssetType] = useState(null);
  const assetNameRef = useRef(null);
  const assetConfRef = useRef(null);

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
          className="bg-gradient-to-br from-indigo-400 px-5 py-2 h-fit rounded-full text-white to-indigo-600 shadow-md shadow-gray-200"
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
        onClick={async () => {
          setShowModal(false);

          const category = assetType;
          const product = assetNameRef.current.value;
          const configuration = assetConfRef.current.value;

          const asset = { category, product, configuration };
          await axios.post(`${API_URL}/asset`, asset);
          window.location.reload();
        }}
      >
        <FormDropdown
          label="Asset Type"
          text="Select Asset type"
          options={["Mouse", "Keyboard", "Monitor", "Laptop"]}
          valueRef={setAssetType}
        />
        <FormField
          fieldRef={assetNameRef}
          label="Enter Name"
          placeholder="Name of Product"
        />
        <FormTextArea
          fieldRef={assetConfRef}
          label="Enter Configuration"
          placeholder="Product Configuration"
        />
      </ModalForm>
    </Page>
  );
};

export default Assets;
