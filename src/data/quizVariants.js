// Six bounded, authored parameter sets per template. k is 1..6, not arbitrary noise.
// Change only explicitly identified givens; derive the key and explanation together.
const f = value => Number(value.toFixed(2)).toLocaleString('en-US', { maximumFractionDigits: 2 })
const variant = (changes, answer, explanation) => ({ changes, answer: Number(answer.toFixed(2)), explanation })
export const numericVariants = {
'how-business-makes-money/easy': k => { const count=18+2*k; return variant([['18 repairs',`${count} repairs`]],count*40,`Revenue = ${count} × $40 = $${f(count*40)}.`) },
'how-business-makes-money/medium': k => { const count=30+2*k; return variant([['30 sessions',`${count} sessions`]],count*45-400,`Revenue = ${count} × $50 = $${f(count*50)}. Materials = ${count} × $5 = $${f(count*5)}. Profit = revenue − materials − $400 rent = $${f(count*45-400)}.`) },
'debt-and-interest/medium': k => { const principal=8000+1000*k; return variant([['$8,000',`$${f(principal)}`]],principal*.06,`Annual simple interest = $${f(principal)} × 6% = $${f(principal*.06)}. Principal repayment is separate.`) },
'revenue-profit-cash/hard': k => { const collected=1600+100*k; return variant([['$1,600',`$${f(collected)}`]],700+collected-900+1000,`Cash = $700 + $${f(collected)} collected − $900 costs + $1,000 borrowing = $${f(700+collected-900+1000)}. Uncollected sales are not cash; borrowing is not revenue.`) },
'owning-a-company/hard': k => { const issued=20+4*k; const end=20/(80+issued)*100; return variant([['20 new shares',`${issued} new shares`]],25-end,`Original ownership = 20/80 = 25%. New ownership = 20/${80+issued} = ${f(end)}%. The fall is ${f(25-end)} percentage points.`) },
'what-is-a-bond/easy': k => { const face=1000+250*k; return variant([['$1,000',`$${f(face)}`]],face*.04,`Annual coupon = $${f(face)} face value × 4% = $${f(face*.04)}.`) },
'why-people-invest/medium': k => { const sale=54+k; const ret=(sale-50+2)/50*100; return variant([['$54',`$${sale}`]],ret,`Total return = ($${sale} sale price − $50 cost + $2 dividend)/$50 = ${f(ret)}%.`) },
'stocks-and-stock-prices/hard': k => { const rise=25+5*k; const end=1000*.8*(1+rise/100); return variant([['rises 25%',`rises ${rise}%`]],(end/1000-1)*100,`Ending value = $1,000 × 0.80 × ${f(1+rise/100)} = $${f(end)}. Cumulative return = ending value/$1,000 − 1 = ${f((end/1000-1)*100)}%. Returns compound; do not add the percentages.`) },
'income-statement-first-look/easy': k => { const revenue=900+100*k; return variant([['$900',`$${f(revenue)}`]],revenue-650,`Profit = $${f(revenue)} revenue − $650 expenses = $${f(revenue-650)}.`) },
'balance-sheet-first-look/medium': k => { const assets=500+50*k; return variant([['$500',`$${assets}`]],assets-320,`Book equity = assets − liabilities = $${assets} − $320 = $${assets-320}.`) },
'balance-sheet-first-look/hard': k => { const assets=600+50*k; return variant([['$600',`$${assets}`]],assets-250,`Initial equity = $${assets} − $250 = $${assets-250}. Borrowing raises cash and debt equally, and equipment exchanges one asset for another. Ending equity is unchanged at $${assets-250}.`) },
'time-value-of-money/medium': k => { const future=121+12.1*k; return variant([['$121',`$${f(future)}`]],future/1.1**2,`Present value = $${f(future)} / 1.10² = $${f(future/1.1**2)}.`) },
'how-banks-make-money/easy': k => { const deal=200+50*k; return variant([['$200 million',`$${deal} million`]],deal*.01,`Fee = 1% × $${deal} million = $${f(deal*.01)} million.`) },
'how-banks-make-money/medium': k => { const deal=150+25*k; return variant([['$150 million',`$${deal} million`]],.4+deal*.012,`Completion fee = 1.2% × $${deal} million = $${f(deal*.012)} million. Add the $0.4 million retainer for $${f(.4+deal*.012)} million total.`) },
'how-banks-make-money/hard': k => { const deal=400+50*k; return variant([['$400 million',`$${deal} million`]],deal*.015*.6-1,`Fee if closed = 1.5% × $${deal} million = $${f(deal*.015)} million. Expected revenue less costs = 60% × that fee − $1 million = $${f(deal*.015*.6-1)} million.`) },
'debt-offerings/easy': k => { const debt=60+10*k; return variant([['$60 million',`$${debt} million`]],debt*.05,`Annual coupon = $${debt} million × 5% = $${f(debt*.05)} million.`) },
'follow-on/medium': k => { const primary=4+k; return variant([['4 million new shares',`${primary} million new shares`]],primary*15,`The issuer receives ${primary} million primary shares × $15 = $${primary*15} million. The secondary share proceeds go to the selling holders.`) },
'debt-vs-equity/hard': k => { const net=90+5*k; return variant([['$90 million',`$${net} million`]],net/.98,`Gross × 98% = net proceeds. Gross = $${net} million / 0.98 = $${f(net/.98)} million.`) },
'revenue-expenses-profit/easy': k => { const revenue=200+20*k; return variant([['Revenue is 200',`Revenue is ${revenue}`]],revenue-120,`Gross profit = revenue ${revenue} − cost of goods sold 120 = ${revenue-120} million.`) },
'balance-sheet/easy': k => { const assets=900+50*k; return variant([['Assets are 900',`Assets are ${assets}`]],assets-350,`Liabilities = assets ${assets} − equity 350 = ${assets-350}.`) },
'ebitda-ebit-net-income/medium': k => { const ebitda=70+4*k; return variant([['EBITDA is 70',`EBITDA is ${ebitda}`]],(ebitda-12-8)*.75,`EBIT = ${ebitda} − 12 = ${ebitda-12}. Pretax income = ${ebitda-12} − 8 = ${ebitda-20}. Net income = ${ebitda-20} × 75% = ${f((ebitda-20)*.75)}.`) },
'financial-ratios/medium': k => { const assets=180+30*k; return variant([['assets are 180',`assets are ${assets}`]],assets/120,`Current ratio = current assets ${assets} / current liabilities 120 = ${f(assets/120)}×.`) },
'working-capital/hard': k => { const ar=12+2*k; return variant([['receivable rises 12',`receivable rises ${ar}`]],45+10-ar+3-4,`CFO = 45 net income + 10 depreciation − ${ar} receivables + 3 inventory release − 4 payables reduction = ${45+10-ar+3-4}.`) },
'depreciation-amortization/hard': k => { const cost=100+20*k; const dep=(cost-20)/4; return variant([['machine costs 100',`machine costs ${cost}`]],cost-2*dep,`Annual depreciation = (${cost} − 20 residual)/4 = ${dep}. After two years, net book value = ${cost} − 2 × ${dep} = ${cost-2*dep}.`) },
'debt-issuance-repayment/easy': k => { const debt=40+10*k; return variant([['borrows 40',`borrows ${debt}`]],debt,`The borrowing increases both cash and debt by ${debt}. Total liabilities therefore rise by ${debt}, before other changes.`) },
'depreciation-walk/medium': k => { const dep=20+4*k; return variant([['by 20.',`by ${dep}.`]],dep*.75,`Net income falls by the after-tax expense: ${dep} × (1 − 25%) = ${f(dep*.75)}.`) },
'ar-increase-walk/medium': k => { const ar=18+3*k; return variant([['additional 18.',`additional ${ar}.`]],-ar,`The extra receivable balance represents cash not yet collected. The change in operating cash flow is −${ar}.`) },
'asset-sale-gain-loss/hard': k => { const sale=45+5*k; return variant([['sold for 45 cash',`sold for ${sale} cash`]],sale-(sale-30)*.2,`Gain = ${sale} − 30 = ${sale-30}. Tax on gain = ${f((sale-30)*.2)}. Net cash received = ${sale} − ${f((sale-30)*.2)} = ${f(sale-(sale-30)*.2)}.`) },
'depreciation-walk/hard': k => { const dep=16+4*k; return variant([['by 16,',`by ${dep},`]],dep*.25,`Net income falls ${dep*.75}; adding back ${dep} depreciation raises CFO by ${dep*.25}. Cash rises ${dep*.25}, net PP&E falls ${dep}, and equity falls ${dep*.75}.`) },
'compounding-discounting/easy': k => { const capital=100+25*k; return variant([['Invest 100',`Invest ${capital}`]],capital*1.08,`Ending value = ${capital} × 1.08 = ${f(capital*1.08)}.`) },
'cost-of-debt/easy': k => { const rate=6+k; return variant([['cost is 6%',`cost is ${rate}%`]],rate*.75,`After-tax cost of debt = ${rate}% × (1 − 25%) = ${f(rate*.75)}%.`) },
'capm/medium': k => { const beta=1.2+.1*k; return variant([['beta is 1.2',`beta is ${f(beta)}`]],3+beta*5,`CAPM cost of equity = 3% + ${f(beta)} × 5% = ${f(3+beta*5)}%.`) },
'npv/medium': k => { const future=121+12.1*k; return variant([['receive 121',`receive ${f(future)}`]],future/1.1**2-100,`Present value = ${f(future)} / 1.10² = ${f(future/1.1**2)}. NPV subtracts the initial 100: ${f(future/1.1**2-100)}.`) },
'wacc/hard': k => { const equity=300+100*k; const total=equity+100; const wacc=equity/total*10+100/total*6*.75; return variant([['worth 300',`worth ${equity}`]],wacc,`Market-value weights are ${equity}/${total} equity and 100/${total} debt. WACC = (${equity}/${total}) × 10% + (100/${total}) × 6% × 75% = ${f(wacc)}%.`) },
'npv/hard': k => { const flow=120+5*k; return variant([['pays 120',`pays ${flow}`]],-200+flow/1.1+flow/1.1**2,`NPV = −200 + ${flow}/1.10 + ${flow}/1.10² = ${f(-200+flow/1.1+flow/1.1**2)}.`) },
'equity-value/easy': k => { const shares=25+5*k; return variant([['25 million diluted shares',`${shares} million diluted shares`]],shares*12,`Equity value = ${shares} million shares × $12 = $${shares*12} million.`) },
'enterprise-value/easy': k => { const equity=200+25*k; return variant([['value is 200',`value is ${equity}`]],equity+70-20,`Enterprise value = equity ${equity} + debt 70 − excess cash 20 = ${equity+50}.`) },
'ev-bridge-logic/medium': k => { const ev=500+40*k; return variant([['value is 500',`value is ${ev}`]],ev-140-20+30,`Equity value = EV ${ev} − debt 140 − preferred stock 20 + excess cash 30 = ${ev-130}.`) },
'treasury-stock-method/medium': k => { const options=10+5*k; return variant([['10 million options',`${options} million options`]],options-options*6/10,`Exercise proceeds = ${options} × $6 = $${options*6} million. Repurchase ${options*6/10} million shares at $10. Incremental dilution = ${options} − ${options*6/10} = ${f(options*.4)} million shares.`) },
'nci/hard': k => { const ev=800+28*k; return variant([['EV is 800',`EV is ${ev}`]],(ev-200-30-50+40)/28,`Common equity = ${ev} − 200 − 30 − 50 + 40 = ${ev-240} million. Divide by 28 million shares for $${f((ev-240)/28)} per share.`) },
'diluted-shares/hard': k => { const ev=600+50*k; return variant([['EV of 600',`EV of ${ev}`]],(ev-150+50)/42.5,`Equity = ${ev} − 150 + 50 = ${ev-100} million. Treasury-stock dilution = 5 − (5 × 10)/20 = 2.5 million shares. Divide by 40 + 2.5 = 42.5 million shares: $${f((ev-100)/42.5)}.`) },
'ev-ebitda/easy': k => { const ebitda=25+5*k; return variant([['to 25 of EBITDA',`to ${ebitda} of EBITDA`]],8*ebitda,`Enterprise value = 8× multiple × ${ebitda} EBITDA = ${8*ebitda}.`) },
'nonrecurring-adjustments/medium': k => { const charge=6+k; return variant([['nonrecurring 6 expense',`nonrecurring ${charge} expense`]],40+charge,`Add back the genuinely nonrecurring expense: adjusted EBITDA = 40 + ${charge} = ${40+charge}. The adjustment still needs supporting evidence.`) },
'ltm-vs-ntm/medium': k => { const ev=360+20*k; return variant([['value is 360',`value is ${ev}`]],ev/40,`Use the forward period: EV/next-year EBITDA = ${ev}/40 = ${f(ev/40)}×. The LTM denominator of 30 answers a different question.`) },
'valuation-synthesis/hard': k => { const reported=45+5*k; return variant([['EBITDA is 45',`EBITDA is ${reported}`]],(reported+5)*9-120+20,`Adjusted EBITDA = ${reported} + 5 = ${reported+5}. EV = ${reported+5} × 9 = ${(reported+5)*9}. Equity = EV − 120 debt + 20 cash = ${(reported+5)*9-100}.`) },
'calendarization/hard': k => { const next=100+10*k; return variant([['EBITDA of 100',`EBITDA of ${next}`]],(80+next)/2,`Calendar 2027 combines six months of each fiscal year: 0.5 × 80 + 0.5 × ${next} = ${(80+next)/2}.`) },
'nopat/easy': k => { const ebit=100+20*k; return variant([['EBIT is 100',`EBIT is ${ebit}`]],ebit*.75,`NOPAT = EBIT ${ebit} × (1 − 25%) = ${ebit*.75}.`) },
'ufcf/medium': k => { const ebit=80+8*k; return variant([['EBIT is 80',`EBIT is ${ebit}`]],ebit*.75+10-18-7,`UFCF = ${ebit} × 75% + 10 D&A − 18 capex − 7 increase in NWC = ${ebit*.75-15}.`) },
'terminal-exit-multiple/medium': k => { const ebitda=60+5*k; return variant([['EBITDA is 60',`EBITDA is ${ebitda}`]],ebitda*8,`Terminal EV = ${ebitda} EBITDA × 8 = ${ebitda*8}. This is a year-end value, not yet discounted to today.`) },
'terminal-perpetuity/hard': k => { const cash=50+5*k; return variant([['UFCF is 50',`UFCF is ${cash}`]],cash*1.02/.08,`Next-year UFCF = ${cash} × 1.02 = ${f(cash*1.02)}. Terminal value = ${f(cash*1.02)} / (10% − 2%) = ${f(cash*1.02/.08)}.`) },
'dcf-ev-to-equity/hard': k => { const terminal=500+50*k; const pv=terminal/1.1**3; return variant([['value is 500',`value is ${terminal}`]],120+pv-150+20,`PV of terminal value = ${terminal}/1.10³ = ${f(pv)}. EV = 120 + ${f(pv)} = ${f(120+pv)}. Equity = EV − 150 debt + 20 cash = ${f(120+pv-130)}.`) },
'eps-mechanics/easy': k => { const income=80+10*k; return variant([['earns 80',`earns ${income}`]],income/20,`EPS = net income ${income} / 20 shares = ${f(income/20)}.`) },
'new-interest-expense/medium': k => { const debt=100+20*k; return variant([['debt is 100',`debt is ${debt}`]],debt*.08*.75,`After-tax interest = ${debt} debt × 8% × (1 − 25%) = ${f(debt*.08*.75)}.`) },
'pro-forma-shares/medium': k => { const price=240+30*k; return variant([['pays 240',`pays ${price}`]],40+price/30,`New shares = ${price}/30 = ${price/30}. Pro forma shares = 40 existing + ${price/30} new = ${40+price/30}.`) },
'accretion-walkthrough/hard': k => { const target=20+2*k; return variant([['Target income is 20',`Target income is ${target}`]],target+6-8,`Combined net income = 100 + ${target} + 6 − 8 = ${98+target}. Standalone EPS = 100/50 = 2; pro forma EPS = ${98+target}/50 = ${f((98+target)/50)}. Accretion = (pro forma EPS/2 − 1) × 100 = ${target-2}%.`) },
'ma-goodwill/hard': k => { const price=300+20*k; return variant([['consideration is 300',`consideration is ${price}`]],price-220,`Goodwill = consideration ${price} − fair-value identifiable net assets 220 = ${price-220}. Those net assets already include assumed liabilities and deferred taxes.`) },
'entry-multiple/easy': k => { const ev=240+15*k; return variant([['value is 240',`value is ${ev}`]],ev/30,`Entry multiple = enterprise value ${ev} / EBITDA 30 = ${f(ev/30)}×.`) },
'sponsor-equity/easy': k => { const uses=400+25*k; return variant([['uses are 400',`uses are ${uses}`]],uses-250,`Sponsor equity fills the funding gap: total uses ${uses} − new debt 250 = ${uses-250}.`) },
'moic/medium': k => { const exit=300+30*k; return variant([['receives 300',`receives ${exit}`]],exit/120,`MOIC = exit proceeds ${exit} / initial investment 120 = ${f(exit/120)}×. There are no interim distributions.`) },
'exit-assumptions/medium': k => { const ebitda=50+5*k; return variant([['EBITDA is 50',`EBITDA is ${ebitda}`]],ebitda*8-140,`Exit EV = ${ebitda} × 8 = ${ebitda*8}. Exit equity = EV − net debt 140 = ${ebitda*8-140}.`) },
'paper-lbo/hard': k => { const debt=180+20*k; return variant([['net debt is 180',`net debt is ${debt}`]],(70*8-debt)/200,`Exit EV = 70 × 8 = 560. Exit equity = 560 − ${debt} = ${560-debt}. MOIC = ${560-debt}/200 initial sponsor equity = ${f((560-debt)/200)}×.`) },
'lbo-irr/hard': k => { const years=3+k; const irr=(2**(1/years)-1)*100; return variant([['four years',`${years} years`]],irr,`With no interim distributions, annual IRR = 2^(1/${years}) − 1 = ${f(irr)}%. A simple average would ignore compounding.`) },
'credit-spreads/easy': k => { const yieldPct=6.5+.25*k; return variant([['yields 6.5%',`yields ${f(yieldPct)}%`]],(yieldPct-4)*100,`Spread = ${f(yieldPct)}% − 4% = ${f(yieldPct-4)} percentage points. Multiply by 100 to get ${(yieldPct-4)*100} basis points.`) },
'debt-markets/medium': k => { const spread=90+10*k; return variant([['widens 90 basis points',`widens ${spread} basis points`]],spread-50,`All-in yield change = −50 benchmark basis points + ${spread} spread basis points = +${spread-50} basis points.`) },
'credit-spreads/hard': k => { const debt=200+50*k; return variant([['refinances 200',`refinances ${debt}`]],debt*.02,`Old yield = 3% + 1.5% = 4.5%. New yield = 4% + 2.5% = 6.5%. Incremental annual interest = ${debt} × 2% = ${f(debt*.02)}.`) },
'excel-basic-formulas/easy': k => { const last=20+5*k; return variant([['12, 18, and 20.',`12, 18, and ${last}.`]],12+18+last,`SUM(B2:B4) adds 12 + 18 + ${last} = ${30+last}.`) },
'excel-dates/medium': k => { const dso=45+5*k; return variant([['DSO is 45',`DSO is ${dso}`]],730/365*dso,`Receivables = revenue/365 × DSO = 730/365 × ${dso} = ${2*dso}.`) },
'revenue-build/easy': k => { const units=2000+250*k; return variant([['2,000 units',`${f(units)} units`]],units*30,`Revenue = ${f(units)} units × $30 = $${f(units*30)}.`) },
'margin-build/medium': k => { const margin=20-.5*k; return variant([['to 20%.',`to ${f(margin)}%.`]],120*margin/100-25,`Original EBITDA = 100 × 25% = 25. Forecast EBITDA = 120 × ${f(margin)}% = ${f(120*margin/100)}. Change = ${f(120*margin/100-25)} despite higher revenue.`) },
'ppe-schedule/medium': k => { const capex=40+5*k; return variant([['capex is 40',`capex is ${capex}`]],150+capex-25-10,`Closing net PP&E = 150 opening + ${capex} capex − 25 depreciation − 10 net book value disposed = ${115+capex}.`) },
'debt-schedule/medium': k => { const repay=50+5*k; return variant([['repayments are 50',`repayments are ${repay}`]],200+30-repay,`Closing debt = 200 opening + 30 borrowing − ${repay} repayments = ${230-repay}.`) },
'nwc-schedule/hard': k => { const revenue=500+20*k; const increase=(revenue-400)*.15; return variant([['to 500.',`to ${revenue}.`]],100-20-30-increase,`NWC rises from 400 × 15% = 60 to ${revenue} × 15% = ${f(revenue*.15)}, using ${f(increase)} cash. Free cash flow = 100 EBITDA − 20 cash tax − 30 capex − ${f(increase)} = ${f(50-increase)}.`) },
}

// Company names are fictional. The context never adds accounting assumptions or
// changes the roles, timing, or constraints stated in the actual question.
const companies = ['Cedar Group', 'Harbor Group', 'Summit Group', 'Willow Group', 'Maple Group', 'Beacon Group']
const contexts = {
  'recruiting-process': ['a regional advisory firm', 'a healthcare coverage team', 'a technology coverage team', 'an industrials team', 'a consumer banking team', 'a generalist advisory team'],
  networking: ['an alumnus in healthcare banking', 'an alumnus in technology banking', 'an alumnus in industrials banking', 'an alumnus in consumer banking', 'an alumnus in energy banking', 'an alumnus in business-services banking'],
  'resume-story': ['a healthcare coverage interview', 'a technology coverage interview', 'an industrials interview', 'a consumer coverage interview', 'a generalist banking interview', 'a business-services interview'],
}
export const VARIANT_COUNT = 6
export const varyQuestion = (question, variantIndex) => {
  if (!Number.isInteger(variantIndex) || variantIndex < 0 || variantIndex >= VARIANT_COUNT) throw new Error('Invalid question variant')
  const k = variantIndex + 1
  let next = { ...question, variantIndex }
  if (question.type === 'number') {
    const generator = numericVariants[`${question.lessonId}/${question.difficulty}`]
    if (!generator) throw new Error(`Missing numeric variant for ${question.id}`)
    const generated = generator(k)
    for (const [from, to] of generated.changes) {
      if (!next.prompt.includes(from)) throw new Error(`Variant text mismatch for ${question.id}: ${from}`)
      next.prompt = next.prompt.replace(from, to)
    }
    next = { ...next, answer: generated.answer, explanation: generated.explanation }
    if (!/round/i.test(next.prompt) && !Number.isInteger(next.answer)) next.prompt += ' Round your final answer to two decimals.'
  }
  // Keep industry-sensitive assumptions intact; only personalize generic companies.
  next.prompt = next.prompt.replace(/\bA company\b/, companies[variantIndex])
  if (question.lessonId === 'what-is-a-business' && question.difficulty === 'easy') {
    const services = ['weather', 'recipe', 'fitness', 'language-learning', 'travel-planning', 'gardening']
    next.prompt = next.prompt.replace('transit app', `${services[variantIndex]} app`)
    next.options = next.options.map(option => option.replace('The transit authority automatically', 'The government automatically'))
  }
  if (question.lessonId === 'revenue-profit-cash' && question.difficulty === 'medium') {
    const roles = ['freelancer', 'illustrator', 'copywriter', 'photographer', 'translator', 'editor']
    next.prompt = next.prompt.replaceAll('designer', roles[variantIndex])
  }
  // A clearly labeled hypothetical case varies the company/industry without
  // changing the original question's correct reasoning or introducing facts.
  const field = contexts[question.moduleId]
  next.scenario = field ? `Practice setting: ${field[variantIndex]}.` : `Practice case: ${companies[variantIndex]} (fictional).`
  return next
}

export const chooseVariant = (previous, random = Math.random) => {
  const choices = Array.from({ length: VARIANT_COUNT }, (_, index) => index).filter(index => index !== previous)
  return choices[Math.floor(random() * choices.length)]
}
export const readVariantHistory = storage => {
  try {
    const data = JSON.parse(storage.getItem('ibase-quiz-variants-v1') || '{}')
    if (!data || typeof data !== 'object' || Array.isArray(data)) return {}
    return Object.fromEntries(Object.entries(data).filter(([id, value]) => id.startsWith('assessment-v2-') && Number.isInteger(value) && value >= 0 && value < VARIANT_COUNT))
  } catch { return {} }
}
