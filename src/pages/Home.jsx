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
        <img
          src="/Image/Scop.jpg"
          alt="ภาพประกอบบทคัดย่อ"
          className="mt-8 h-auto max-w-4xl w-full rounded-xl"
        />
        <p className="mt-2 max-w-4xl text-center text-xs text-gray-500">
          แผนที่แสดงขอบเขตพื้นที่ศึกษา 20 จังหวัดในภาคตะวันออกเฉียงเหนือ
        </p>
        <p className="max-w-4xl text-gray-600 text-base leading-8 indent-8">
          ผลการศึกษาผู้ป่วยโรคปอดอุดกั้นเรื้อรัง (COPD, ICD-10: J44) ในภาคตะวันออกเฉียงเหนือ 
          ระหว่างปี พ.ศ. 2563–2568 พบผู้ป่วยรวม 433,150 ราย โดยอัตราป่วยเฉลี่ยต่อแสนประชากรรายตำบลมีแนวโน้มเพิ่มขึ้น
          จาก 325.3 ในปี พ.ศ. 2565 เป็น 419.5 ในปี พ.ศ. 2568 ผลการวิเคราะห์ความสัมพันธ์เชิงพื้นที่ระดับท้องถิ่น (LISA) 
          พบว่าตำบลส่วนใหญ่ไม่ปรากฏความสัมพันธ์เชิงพื้นที่อย่างมีนัยสำคัญทางสถิติ โดยกลุ่ม Low-Low 
          มีสัดส่วนมากกว่ากลุ่ม High-High อย่างชัดเจน และเมื่อวิเคราะห์ความสอดคล้องกับจุดความร้อน 
          พบพื้นที่ Concordant รวมกลุ่มเป็นผืนใหญ่ต่อเนื่องบริเวณตอนใต้ของภาค โดยเฉพาะจังหวัดสุรินทร์และศรีสะเกษ 
          ในทุกปีที่ทำการวิเคราะห์ อย่างไรก็ตาม ความสอดคล้องดังกล่าวเป็นรูปแบบค่าต่ำทั้งสองด้าน (Low-Low) 
          มิใช่พื้นที่เสี่ยงสูง ขณะที่รูปแบบ High-High พบในขอบเขตจำกัดบริเวณมุมตะวันตกเฉียงเหนือของภาค
        </p>
        <br />
        
        <img
          src="/Image/tool.png"
          alt="ภาพประกอบบทคัดย่อ"
          className="mt-8 h-auto max-w-4xl w-full rounded-xl"
        />
        <p className="mt-2 max-w-4xl text-center text-xs text-gray-500">
          เครื่องมือและเทคนิคที่ใช้ในการวิเคราะห์เชิงพื้นที่ (ArcGIS Pro)
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <SectionHeader
          titleTh="โปสเตอร์งานวิจัย"
          titleEn="Research Poster"
        />
        <a
          href="/Project_04.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="เปิดโปสเตอร์งานวิจัยฉบับเต็มในไฟล์ PDF"
          className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
        >
          <div className="relative h-[360px] overflow-hidden bg-slate-100 sm:h-[480px] lg:h-[600px]">
            <iframe
              src="/Project_04.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit"
              title="ตัวอย่างโปสเตอร์งานวิจัย"
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none h-full w-full border-0 bg-white"
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16">
              <span className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors group-hover:bg-white">
                คลิกเพื่อเปิดไฟล์ PDF ฉบับเต็ม
              </span>
            </div>
          </div>
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <SectionHeader
          titleTh="เล่มวิจัยฉบับเต็ม"
          titleEn="Full Research Report"
        />
        <a
          href="/Research_Full.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="เปิดเล่มวิจัยฉบับเต็มในไฟล์ PDF"
          className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
        >
          <div className="relative h-[360px] overflow-hidden bg-slate-100 sm:h-[480px] lg:h-[600px]">
            <iframe
              src="/Research_Full.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit"
              title="ตัวอย่างเล่มวิจัยฉบับเต็ม"
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none h-full w-full border-0 bg-white"
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16">
              <span className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors group-hover:bg-white">
                คลิกเพื่อเปิดเล่มวิจัยฉบับเต็ม
              </span>
            </div>
          </div>
        </a>
      </section>

    </main>
  )
}
