import { useEffect, useRef, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { festivals } from '../data/festivals'

const sorted = [...festivals].sort((a, b) => a.year - b.year)

export default function Compare() {
  const [selectedFestival, setSelectedFestival] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (selectedFestival) {
      dialogRef.current?.showModal()
    }
  }, [selectedFestival])

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader 
          titleTh="Descriptive Spatial Analysis" 
          titleEn="การวิเคราะห์ความสัมพันธ์เชิงพื้นที่ระหว่าง อัตราการป่วย กับ จุดความร้อน" />
      <p className="max-w-4xl text-gray-600 text-base leading-8 indent-8 mb-14 -mt-4">
        การวิเคราะห์ความสัมพันธ์เชิงพื้นที่ระหว่างอัตราผู้ตราป่วยโรคปอดอุดกั้นเรื้อรัง (COPD, ICD-10: J44) กับจำนวนจุดความร้อนในระดับตำบล  
        โดยนำผลการวิเคราะห์เชิงพื้นที่ของทั้งสองตัวแปรจากการวิเคราะห์ LISA มาซ้อนทับกัน (Spatial Overlay) 
        เพื่อพิจารณาความสอดคล้องเชิงพื้นที่ระหว่างพื้นที่เสี่ยงด้านสุขภาพและพื้นที่ที่มีความหนาแน่นของจุดความร้อนสูง
        การซ้อนทับแบ่งตำบลเป็น 5 ประเภท ได้แก่ Concordant (HH/LL) คือตำบลที่อัตราป่วยและจุดความร้อนเป็นคลัสเตอร์ชนิดเดียวกันอย่างมีนัยสำคัญ 
        (High-High ทั้งคู่ หรือ Low-Low ทั้งคู่) Partial คือมีนัยสำคัญเพียงตัวแปรเดียว Discordant (HL/LH) 
        คือคลัสเตอร์ตรงข้ามกัน Outlier และ Not Significant 
      </p>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger animate-fade-up">
        {sorted.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setSelectedFestival(f)}
            className="group w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
          >
            {/* Image with date badge */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={f.image}
                alt={`${f.nameTh} ${f.dateLabel}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
                {f.dateLabel}
              </span>
            </div>

            <div className="p-5">
              <h3
                className="text-lg font-bold text-gray-900 mb-0.5 group-hover:text-slate-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {f.nameTh}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{f.nameEn}</p>
              <p className="text-gray-600 text-base line-clamp-3 leading-8">{f.description}</p>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="comparison-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close()
          }
        }}
        onClose={() => setSelectedFestival(null)}
        className="fixed inset-0 m-auto max-h-[92vh] w-[min(96vw,80rem)] max-w-none overflow-y-auto rounded-2xl bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-black/75"
      >
        {selectedFestival && (
          <div className="grid md:grid-cols-[minmax(0,1.8fr)_minmax(16rem,1fr)]">
            <div className="flex min-h-64 items-center justify-center bg-slate-50 p-2 md:p-4">
              <img
                src={selectedFestival.image}
                alt={`${selectedFestival.nameTh} ${selectedFestival.dateLabel}`}
                className="max-h-[55vh] w-full object-contain md:max-h-[86vh]"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {selectedFestival.dateLabel}
                </span>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  className="rounded-md border border-transparent bg-white px-3 py-1 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-none"
                  aria-label="ปิดรายละเอียด"
                >
                  close
                </button>
              </div>
              <h2
                id="comparison-dialog-title"
                className="mb-2 text-xl font-bold leading-relaxed text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {selectedFestival.nameTh}
              </h2>
              <p className="mb-5 text-sm text-gray-500">{selectedFestival.nameEn}</p>
              <p className="text-base leading-8 text-gray-700">
                {selectedFestival.description}
              </p>
            </div>
          </div>
        )}
      </dialog>
      <br />
      <p className="max-w-4xl text-gray-600 text-base leading-8 indent-8 mb-14 -mt-4">
        ผลจากการซ้อนทับผล LISA ของอัตราป่วย COPD กับผล LISA ของจำนวนจุดความร้อนรายตำบล ในปี พ.ศ. 2563 และ 2565–2568 
        (ไม่รวมปี พ.ศ. 2564 เนื่องจากอยู่ในช่วงการระบาดของโรคโควิด-19) พบว่าตำบล Concordant รวมกลุ่มเป็นผืนใหญ่ที่สุดทางตอนใต้ของภาค 
        บริเวณจังหวัดสุรินทร์และศรีสะเกษ ในตำแหน่งเดิมทุกปี และกว้างต่อเนื่องที่สุดในปี พ.ศ. 2568  ความสอดคล้องนี้เป็นแบบค่าต่ำทั้งคู่เป็นหลัก 
        ตรงกับพื้นที่ Low-Low ของทั้งสองตัวแปรในหัวข้อ 4.3 จึงไม่ใช่พื้นที่เสี่ยงสูงทั้งสองด้าน จากการยืนยันด้วยตารางที่ 4.8 ส่วนความสอดคล้อง
        แบบค่าสูงทั้งคู่พบจำกัดเป็นหย่อมเล็กทางมุมตะวันตกเฉียงเหนือ (บริเวณจังหวัดเลย) ในปี พ.ศ. 2563–2567 และไม่ปรากฏชัดเจนในปี พ.ศ. 2568 
        ขณะที่ตำบลส่วนใหญ่เป็น Partial หรือไม่มีนัยสำคัญทางสถิติ และ Discordant พบน้อยกระจัดกระจายตลอดทุกปี ตำแหน่งความสอดคล้องไม่ได้เปลี่ยน
        ตามจำนวนจุดความร้อนรวม โดยในปี พ.ศ. 2565 ที่จุดความร้อนรวมต่ำที่สุด (2,638 จุด) และปี พ.ศ. 2566 ที่เพิ่มขึ้นร้อยละ 106.2 
        ผืนทางใต้ยังมีตำแหน่งใกล้เคียงเดิม และในปี พ.ศ. 2568 ที่จุดความร้อนรวมลดลงร้อยละ 18.0 ผืนนี้กลับกว้างที่สุด นอกจากนี้ พื้นที่ HotSpot 
        ของจุดความร้อนทางตะวันตก (ชัยภูมิ–นครราชสีมา) ไม่ได้ตรงกับพื้นที่อัตราป่วยสูงอย่างชัดเจน ทั้งนี้เป็นการวิเคราะห์เชิงพรรณนาจากการซ้อนทับแผนที่ 
        ไม่ได้ทดสอบนัยสำคัญทางสถิติของความสัมพันธ์ จึงสรุปได้เพียงความสอดคล้องเชิงรูปแบบทางพื้นที่ ไม่สามารถสรุปความสัมพันธ์เชิงสาเหตุได้
      </p>
    </main>
  )
}
