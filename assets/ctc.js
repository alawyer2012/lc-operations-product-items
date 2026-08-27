(function () {
  "use strict";

  var UNIT_MONTHS_2027 = 533506.69;
  var VANITY_COST_2027 = (UNIT_MONTHS_2027 / 120) * 0.575;
  var SHEET_TOTAL = UNIT_MONTHS_2027 * 31.5 * 0.0099 + VANITY_COST_2027;

  var SCENARIOS = {
    sheet: {
      label: "Sheet model",
      mpu: 31.5,
      rate: 0.0099,
      why: "18 outbound calls/day × 7 min × 30 days ÷ 120 units. Twilio 2 PSTN legs at $0.00495.",
    },
    cottonwood: {
      label: "Cottonwood-like",
      mpu: 20.34,
      rate: 0.0099,
      why: "Hottest completed PMC row: 25 outbound/day on 295 units, 8 min AHT. Courtesy Connection, not proven CTC.",
    },
    pmc: {
      label: "PMC mix (repaired)",
      mpu: 11.16,
      rate: 0.0099,
      why: "Mean of Cottonwood, PAC, Trinity, and Westover rebuilt on the 20-property / 4,347-unit extract.",
    },
    trinity: {
      label: "Trinity-like",
      mpu: 3.45,
      rate: 0.0099,
      why: "Lowest completed PMC: 300 outbound/mo on 200 units, 2.3 min AHT (Zoom).",
    },
    sip: {
      label: "Sheet + SIP architecture",
      mpu: 31.5,
      rate: 0.00895,
      why: "Same 31.5 min/unit, but one PSTN leg + one SIP leg instead of two PSTN legs.",
    },
    trans: {
      label: "Sheet + Twilio transcription",
      mpu: 31.5,
      rate: 0.0369,
      why: "Ryan C MASTER stacks $0.027/min transcription on every outbound minute. Dominates COGS.",
    },
    aws: {
      label: "Sheet on AWS Connect",
      mpu: 31.5,
      rate: 0.01995,
      why: "EDS telephony $0.0042 + platform $0.01575. Not doubled. ~2× Twilio on the same minutes.",
    },
  };

  var ORDER = ["sheet", "cottonwood", "pmc", "trinity", "sip", "trans", "aws"];

  function money(n) {
    if (Math.abs(n) >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
    return "$" + Math.round(n).toLocaleString("en-US");
  }

  function mins(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(2) + "M";
    return Math.round(n).toLocaleString("en-US");
  }

  function compute(id) {
    var s = SCENARIOS[id];
    var yearMins = UNIT_MONTHS_2027 * s.mpu;
    var voice = yearMins * s.rate;
    var total = voice + VANITY_COST_2027;
    return {
      id: id,
      label: s.label,
      why: s.why,
      mpu: s.mpu,
      yearMins: yearMins,
      voice: voice,
      total: total,
      vsSheet: total / SHEET_TOTAL,
    };
  }

  function tone(total) {
    if (total > 300000) return "var(--p1)";
    if (total > 150000) return "var(--p2)";
    return "var(--ok)";
  }

  function render(activeId) {
    var s = compute(activeId);
    var stats = document.getElementById("scenario-stats");
    var why = document.getElementById("scenario-why");
    var tbody = document.getElementById("scenario-table");

    stats.innerHTML =
      '<article class="stat"><p class="stat__value">' +
      s.mpu.toFixed(1) +
      '</p><p class="stat__label">Min / unit / month</p></article>' +
      '<article class="stat"><p class="stat__value">' +
      mins(s.yearMins) +
      '</p><p class="stat__label">2027 conversation minutes</p></article>' +
      '<article class="stat"><p class="stat__value" style="color:' +
      tone(s.total) +
      '">' +
      money(s.total) +
      '</p><p class="stat__label">2027 Entrata COGS</p></article>' +
      '<article class="stat"><p class="stat__value">' +
      Math.round(s.vsSheet * 100) +
      '%</p><p class="stat__label">vs sheet Twilio 2-leg</p></article>';

    why.textContent = s.why;

    tbody.innerHTML = ORDER.map(function (id) {
      var row = compute(id);
      var cls = id === activeId ? ' class="is-active"' : "";
      return (
        "<tr" +
        cls +
        "><td>" +
        row.label +
        "</td><td>" +
        row.mpu.toFixed(2) +
        "</td><td>" +
        mins(row.yearMins) +
        "</td><td>" +
        money(row.voice) +
        "</td><td>" +
        money(row.total) +
        "</td></tr>"
      );
    }).join("");
  }

  var buttons = document.querySelectorAll("[data-scenario]");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      render(btn.getAttribute("data-scenario"));
    });
  });

  render("sheet");
})();
