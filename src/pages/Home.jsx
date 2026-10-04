import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="abstract" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-20">
        <SectionHeader titleTh="บทคัดย่อ" />
        <p className="max-w-4xl text-gray-600 text-base leading-8 indent-8">
          การศึกษาครั้งนี้มีวัตถุประสงค์เพื่อวิเคราะห์รูปแบบการกระจายตัวเชิงพื้นที่ (Spatial Distribution) 
          และปัจจัยที่เกี่ยวข้องกับการเกิดโรคระบบทางเดินหายใจในพื้นที่ภาคตะวันออกเฉียงเหนือของประเทศไทย 
          โดยประยุกต์ใช้ระบบสารสนเทศภูมิศาสตร์ (Geographic Information System: GIS) 
          ร่วมกับเทคนิคทางสถิติเชิงพื้นที่ (Spatial Statistics) 
          ได้แก่ การตรวจจับการกระจุกตัวเชิงพื้นที่ในภาพรวมด้วย Global Moran's I และ Global Getis-Ord G 
          การวิเคราะห์ระดับพื้นที่ย่อยด้วยเทคนิค Local Indicators of Spatial Association (LISA) 
          และ Local Getis-Ord Gi* เพื่อระบุตำแหน่งพื้นที่จุดร้อน (Hotspot) และจุดเย็น (Coldspot) ของโรค 
          ตลอดจนการวิเคราะห์ความสัมพันธ์เชิงพื้นที่ (Spatial Autocorrelation) ระหว่างการเกิดโรคกับปัจจัยด้านสิ่งแวดล้อม 
          โรคระบบทางเดินหายใจที่นำมาศึกษาครอบคลุมกลุ่มโรคตามมาตรฐานการจัดหมวดหมู่สากล ICD-10 (รหัส J00-J70) 
          ทั้งโรคติดเชื้อเฉียบพลันและโรคเรื้อรัง เช่น โรคปอดอุดกั้นเรื้อรัง (COPD) โรคหืด ซิลิโคสิส นิวโมโคนิโอสิส โรคปอดจากควันหมอกควัน 
          และมะเร็งปอด ซึ่งแต่ละโรคมีปัจจัยเชิงสาเหตุและปัจจัยเชิงพื้นที่ที่เกี่ยวข้องแตกต่างกัน 
          เช่น ความเข้มข้นของฝุ่นละอองขนาดเล็ก (PM2.5) การเผาไร่ พื้นที่อุตสาหกรรมและเหมืองแร่ ตลอดจนสถานีตรวจวัดคุณภาพอากาศ 
        </p>
      </section>

    </main>
  )
}
