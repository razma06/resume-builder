import { useGeneralInfoStore } from "@/stores/generalInfo";
import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import { Flex } from "@/components/library/Flex.styled";
import { ResumeImage } from "./Resume.styled";
import Description from "../descriptionContainer/DescriptionContainer";

const GeneralInfoSection = () => {
    const generalInfo = useGeneralInfoStore((state) => state.generalInfo);
    return (
        <section>
            <h2 className="title">
                {generalInfo.name} {generalInfo.secondName}
            </h2>
            {generalInfo.idImage && (
                <ResumeImage
                    src={(generalInfo.idImage as string) || ""}
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
                    <div className="contact" style={{ marginBottom: "34px" }}>
                        <img src={PhoneIcon} alt="" />
                        <p>{generalInfo.phone}</p>
                    </div>
                ) : null}
            </Flex>
            {generalInfo.aboutMe && true && (
                <Description
                    style={{ maxWidth: "432px" }}
                    title="ჩემ შესახებ"
                    descriptionText={generalInfo.aboutMe}
                />
            )}
        </section>
    );
};

export default GeneralInfoSection;
