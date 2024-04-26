import toast from "react-hot-toast";

const success = () => {
    toast.success("Operação realizada!", {
        position: "top-right",
    });

};

const error = (message?: string) => {
    toast.error(
        `Operação não realizada!\n${message ?? ""}`,
        {
            position: "top-right",
        }
    );
};

const toastMessage = {
    success,
    error,
};

export default toastMessage;