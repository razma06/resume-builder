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
                height={70}
                width={70}
                color="var(--primary)"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="var(--border)"
                strokeWidth={3}
                strokeWidthSecondary={3}
            />
        </div>
    );
};

export default Loader;
