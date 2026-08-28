export default function RangeSettings({id,label,value,setValue,min,max,step,unite=""}){
    //Composant pour afficher un réglage avec un input range.
    //Un id est également passer en props pour garder un id fixe au lieu du label qui change selon les langues
    return(
        <div className="range-setting">
            <label htmlFor={id}>
                <div className="range-wrapper">
                    <span>{label}</span>
                    <span>{value}{unite}</span>
                </div>
                <input type="range"  name={label} id={id} min={min} max={max} step={step} value={value} onChange={(e)=>setValue(Number(e.target.value))} />
            </label>
        </div>
    )
}