import { Oval } from "react-loader-spinner";

const Loader = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Oval
                height={80}
                width={80}
                color="var(--primary)"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="var(--border)"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};

export default Loader;
