import SectionHeader from '../components/SectionHeader'

const analysisYears = [
  { year: 63, moran: '0.207585', zScore: '18.348037', rSquared: '0.14' },
  { year: 64, moran: '0.207502', zScore: '18.356788', rSquared: '0.08' },
  { year: 65, moran: '0.172289', zScore: '15.263884', rSquared: '0.05' },
  { year: 66, moran: '0.150880', zScore: '13.380190', rSquared: '0.10' },
  { year: 67, moran: '0.116771', zScore: '10.399547', rSquared: '0.07' },
  { year: 68, moran: '0.133737', zScore: '11.886458', rSquared: '0.14' },
]

export default function Moransi() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader
        titleTh="Spatial Autocorrelation"
        titleEn="การวิเคราะห์ความสัมพันธ์เชิงพื้นที่ ด้วยสถิติ Moran's I"
      />
      <p className="max-w-4xl text-gray-600 text-base leading-8 indent-8">
        โรคระบบทางเดินหายใจในภาคตะวันออกเฉียงเหนือกระจายตัวอย่างไร 
        พื้นที่ที่มีอัตราป่วยสูงอยู่ใกล้กันหรือไม่ และกลุ่มก้อนเหล่านั้นเปลี่ยนไปอย่างไรในแต่ละปี 
        คำถามเหล่านี้ตอบได้ด้วยแนวคิดเรื่องสหสัมพันธ์เชิงพื้นที่ ซึ่งมีรากฐานจากกฎข้อแรกของภูมิศาสตร์ของ Tobler 
        ที่ว่า "ทุกสิ่งสัมพันธ์กับทุกสิ่ง แต่สิ่งที่อยู่ใกล้กันสัมพันธ์กันมากกว่าสิ่งที่อยู่ไกลกัน" 
        เครื่องมือหลักที่ใช้คือสถิติ Moran's I ซึ่งแบ่งการอ่านผลเป็นสองระดับ คือภาพรวมทั้งภูมิภาค (Global) 
        และรายพื้นที่ (Local) ในการทำวิจัยครั้งนี้ผู้จัดทำได้นำอัตราป่วยที่ผ่านข้อมูลการเตรียมแล้ว
        มาวิเคราะห์รูปแบบการกระจุกตัวเชิงพื้นที่ (Spatial Autocorrelation) 
        โดยใช้ Global Moran's I เพื่อทดสอบจำนวนผู้ป่วยในแต่ละตำบลมีการกระจุกตัวเชิงพื้นที่
        อย่างมีนัยสำคัญทางสถิติหรือไม่ ร่วมกับ Local Indicators of Spatial Association (LISA) 
        เพื่อระบุตำแหน่งของกลุ่มพื้นที่ที่มีจำนวนผู้ป่วยสูงล้อมรอบด้วยพื้นที่ที่มีค่าสูงเช่นกัน (High-High) 
        พื้นที่ค่าต่ำล้อมรอบด้วยค่าต่ำ (Low-Low) และพื้นที่ผิดปกติ (Outlier) โดยดำเนินการแยกเป็นรายปี 
        ผลลัพธ์ที่ได้ ได้แก่ ค่า Global Moran's I และ p-value รายปี แผนที่ LISA Cluster รายปี
      </p>

      <section className="mt-10 max-w-4xl space-y-6 text-gray-600">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-800">
            1 ทดสอบภาพรวมของการกระจายตัว (Global Moran's I)
          </h2>
          <p className="text-base leading-8 indent-8">
            ใช้ทดสอบภาพรวมของการกระจายตัวเชิงพื้นที่ทั้งพื้นที่ศึกษา (global pattern) ว่าตัวแปรที่สนใจมีแนวโน้มรวมกลุ่มเชิงพื้นที่
            (spatial clustering) กระจายสม่ำเสมอ หรือเป็นแบบสุ่ม โดยอาศัยค่าจากพื้นที่ข้างเคียงตามโครงสร้างเมทริกซ์น้ำหนักเชิงพื้นที่
            (spatial weights matrix) ที่กำหนดไว้ในขั้นตอนการเตรียมข้อมูล โดยค่า Moran's I ซึ่งอยู่ในช่วงประมาณ -1 ถึง +1
            บ่งบอกทิศทางและความแข็งแรงของความสัมพันธ์เชิงพื้นที่ในภาพรวม ค่าเข้าใกล้ +1 หมายถึงมีการรวมกลุ่มเชิงพื้นที่
            (positive spatial autocorrelation) พื้นที่ใกล้กันมีค่าคล้ายคลึงกัน ค่าเข้าใกล้ -1 หมายถึงมีการกระจายสลับกัน
            (negative spatial autocorrelation) พื้นที่ใกล้กันมีค่าตรงข้ามกัน และค่าเข้าใกล้ 0 หมายถึงไม่มีรูปแบบเชิงพื้นที่ที่ชัดเจน
            (random pattern) ค่า z-score และ p-value ใช้บ่งชี้นัยสำคัญทางสถิติของค่า Moran's I ที่คำนวณได้ หากค่า p-value
            น้อยกว่า 0.05 ถือว่ารูปแบบการกระจายตัวที่พบมีนัยสำคัญทางสถิติที่ระดับความเชื่อมั่น 95% (ไม่ได้เกิดจากความบังเอิญ)
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-800">
            2 ทดสอบการกระจายตัวแบบระบุตำแหน่งเฉพาะ (Local Indicators of Spatial Association)
          </h2>
          <p className="text-base leading-8 indent-8">
            เป็นการขยายผลจาก Global Moran's I มาสู่ระดับพื้นที่ย่อย เพื่อระบุตำแหน่งเฉพาะที่มีนัยสำคัญทางสถิติ
            โดยจำแนกออกเป็น 4 รูปแบบ (แสดงผลในรูปแบบแผนที่ LISA cluster map)
          </p>
          <ul className="my-4 space-y-3 pl-8 text-base leading-8">
            <li>High-High (HH): พื้นที่ที่มีค่าสูงล้อมรอบด้วยพื้นที่ที่มีค่าสูง (hot spot cluster)</li>
            <li>Low-Low (LL): พื้นที่ที่มีค่าต่ำล้อมรอบด้วยพื้นที่ที่มีค่าต่ำ (cold spot cluster)</li>
            <li>High-Low (HL): พื้นที่ที่มีค่าสูงแต่ล้อมรอบด้วยพื้นที่ที่มีค่าต่ำ (spatial outlier)</li>
            <li>Low-High (LH): พื้นที่ที่มีค่าต่ำแต่ล้อมรอบด้วยพื้นที่ที่มีค่าสูง (spatial outlier)</li>
          </ul>
          <p className="text-base leading-8 indent-8">
            ในกรณีที่ต้องการวิเคราะห์ความสัมพันธ์ระหว่างสองตัวแปรพร้อมกัน (เช่น จุดความร้อนกับอัตราป่วย)
            สามารถประยุกต์ใช้ Bivariate Moran's I เพื่อตรวจสอบว่าค่าสูงของตัวแปรหนึ่งในพื้นที่หนึ่งมีความสัมพันธ์
            กับค่าสูงของอีกตัวแปรหนึ่งในพื้นที่ใกล้เคียงหรือไม่
          </p>
        </div>
      </section>
      
      <div className="mt-12 space-y-12">
        {analysisYears.map(({ year, moran, zScore, rSquared }) => (
          <section key={year} aria-labelledby={`analysis-year-${year}`}>
            <h2
              id={`analysis-year-${year}`}
              className="mb-4 text-xl font-semibold text-gray-800"
            >
              ปี 25{year}
            </h2>
            <div className="grid grid-cols-1 gap-0 md:max-w-5xl md:grid-cols-2">
              {[
                {
                  type: 'LISA Cluster',
                  src: `/Image/moransi/lisa${year}.jpg`,
                },
                {
                  type: "Global Moran's I",
                  src: `/Image/moransi/global${year}.png`,
                },
              ].map(({ type, src }) => (
                <figure key={type} className="min-w-0">
                  <figcaption className="mb-2 text-sm font-medium text-gray-600">
                    {type} 25{year}
                  </figcaption>
                  <div className="flex h-72 items-center justify-center md:h-[420px]">
                    <img
                      src={src}
                      alt={`แผนที่ ${type} ปี 25${year}`}
                      className="max-h-full max-w-full rounded-xl border border-gray-200 object-contain"
                      loading="lazy"
                    />
                  </div>
                  {type === 'LISA Cluster' ? (
                    <p className="mt-3 text-gray-600 text-base leading-8 indent-8">
                      แผนที่ LISA แสดงการกระจายกลุ่มพื้นที่รายตำบล โดยสีชมพูคือกลุ่มค่าสูงที่อยู่ใกล้ค่าสูง
                      (High-High) สีฟ้าอ่อนคือกลุ่มค่าต่ำที่อยู่ใกล้ค่าต่ำ (Low-Low) สีแดงและสีน้ำเงินแสดงพื้นที่
                      Outlier ที่มีค่าสูงหรือต่ำแตกต่างจากพื้นที่ข้างเคียง ส่วนสีขาวคือพื้นที่ที่ไม่มีนัยสำคัญ
                      กราฟ Moran Scatterplot ด้านล่างแสดงความสัมพันธ์ระหว่างอัตราป่วยกับค่าของพื้นที่ข้างเคียง
                      โดยมีค่า R² เท่ากับ {rSquared}
                    </p>
                  ) : (
                    <div className="mt-3 text-gray-600 text-base leading-8">
                      <p className="flex flex-wrap gap-x-4">
                        <span className="whitespace-nowrap">Moran’s I = {moran}</span>
                        <span className="whitespace-nowrap">Z-score = {zScore}</span>
                        <span className="whitespace-nowrap">p &lt; 0.001</span>
                      </p>
                      <p className="indent-8">
                        ผลแสดงการกระจุกตัวเชิงพื้นที่ในทิศทางบวกอย่างมีนัยสำคัญทางสถิติ กล่าวคือพื้นที่ที่มีอัตราป่วย
                        สูงมีแนวโน้มอยู่ใกล้พื้นที่ที่มีอัตราป่วยสูงเช่นกัน และพื้นที่ที่มีอัตราป่วยต่ำมีแนวโน้มอยู่ใกล้กัน
                      </p>
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
