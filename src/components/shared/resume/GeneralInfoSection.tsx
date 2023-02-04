import { useGeneralInfoStore } from "@/stores/generalInfo";
import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import { Flex } from "@/components/library/Flex.styled";
import { ResumeImage } from "./Resume.styled";

const GeneralInfoSection = () => {
    const generalInfo = useGeneralInfoStore((state) => state.generalInfo);

    return (
        <section>
            <h2 className="title">
                {generalInfo.name} {generalInfo.secondName}
            </h2>
            {generalInfo.idImage[0] && (
                <ResumeImage
                    src={URL.createObjectURL(generalInfo.idImage[0])}
                    alt=""
                ></ResumeImage>
            )}
            <Flex flexDirection="column" rowGap="10px">
                {generalInfo.email ? (
                    <div className="contact">
                        <img src={MailIcon} alt="" />
                        <p>{generalInfo.email}</p>
                    </div>
                ) : null}
                {generalInfo.phone ? (
                    <div className="contact">
                        <img src={PhoneIcon} alt="" />
                        <p>{generalInfo.phone}</p>
                    </div>
                ) : null}
            </Flex>
            {generalInfo.aboutMe ? (
                <div style={{ maxWidth: "432px" }}>
                    <h3 className="small-title">ჩემ შესახებ</h3>
                    <p className="description">{generalInfo.aboutMe}</p>
                </div>
            ) : null}
        </section>
    );
};

export default GeneralInfoSection;
