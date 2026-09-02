"use client";

import React, { useState } from "react";
import {
  Activity,
  Disc,
  Dumbbell,
  Zap,
  Layers,
  Sparkles,
  Search,
  ArrowRight,
  ShieldAlert,
  Calendar,
  CheckCircle2,
  Info
} from "lucide-react";

export interface ConditionItem {
  id: string;
  name: string;
  category: "Spine" | "Joints" | "Neck & Head" | "Nerves & Posture";
  shortDesc: string;
  fullDesc: string;
  commonSymptoms: string[];
  careApproach: string;
  iconType: string;
}

export const conditionsData: ConditionItem[] = [
  {
    id: "back-pain",
    name: "Back Pain",
    category: "Spine",
    shortDesc: "Assessment and support for acute, posture-related, or persistent lower and mid-back discomfort.",
    fullDesc: "Back discomfort is one of the most common musculoskeletal concerns. Clinical assessment focuses on spinal mobility, postural muscle balance, and functional movement mechanics to formulate conservative care options.",
    commonSymptoms: ["Lower back dull ache", "Stiffness upon waking", "Discomfort with prolonged sitting", "Muscle tension"],
    careApproach: "Biomechanical evaluation, spinal mobilization, posture correction guidance, and therapeutic movement exercises.",
    iconType: "disc"
  },
  {
    id: "joint-pain",
    name: "Joint Pain",
    category: "Joints",
    shortDesc: "Care focused on peripheral joints including knees, hips, and ankles to encourage movement comfort.",
    fullDesc: "Joint discomfort can arise from mechanical wear, repetitive strain, or physical overload. Clinical care is aimed at joint mobility, surrounding muscle support, and movement quality.",
    commonSymptoms: ["Joint stiffness", "Restricted range of motion", "Ache during movement or weight-bearing", "Post-exercise fatigue"],
    careApproach: "Gentle joint mobilization, soft tissue therapy, and stabilizing exercise protocols.",
    iconType: "activity"
  },
  {
    id: "sports-injury",
    name: "Sports Injury",
    category: "Joints",
    shortDesc: "Support for activity-related strains, sprains, and movement imbalances sustained during athletic pursuits.",
    fullDesc: "Athletic and sports injuries require focused evaluation of soft tissues, ligamentous stability, and movement biomechanics to help athletes safely regain functional capacity.",
    commonSymptoms: ["Muscle strain", "Tendon tightness", "Loss of athletic agility", "Localized tender points"],
    careApproach: "Active physiotherapy rehabilitation, progressive load management, and functional movement retraining.",
    iconType: "dumbbell"
  },
  {
    id: "neck-pain",
    name: "Neck Pain",
    category: "Neck & Head",
    shortDesc: "Focused evaluation for cervical spine stiffness, posture fatigue, and restricted neck rotation.",
    fullDesc: "Cervical spine discomfort is often associated with desk posture, screen use, sleeping positions, or mechanical strain. Care aims to restore comfortable cervical movement.",
    commonSymptoms: ["Difficulty turning head", "Cervical muscle tightness", "Discomfort traveling into upper back", "Morning stiffness"],
    careApproach: "Cervical alignment assessment, gentle osteopathic release, ergonomic posture advice, and neck stretching routines.",
    iconType: "disc"
  },
  {
    id: "headache",
    name: "Headache (Cervicogenic/Tension)",
    category: "Neck & Head",
    shortDesc: "Evaluation for tension and musculoskeletal strain stemming from the upper neck and cranial base.",
    fullDesc: "Cervicogenic headaches and tension-type head discomfort often correlate with cervical joint restriction and tight suboccipital musculature.",
    commonSymptoms: ["Band-like forehead pressure", "Base of skull tenderness", "Headache worsened by neck movement", "Shoulder tightness"],
    careApproach: "Upper cervical mobilization, myofascial release, posture correction, and stress-reduction movement strategies.",
    iconType: "zap"
  },
  {
    id: "scoliosis",
    name: "Scoliosis",
    category: "Nerves & Posture",
    shortDesc: "Supportive conservative care and posture management for spinal curvature and asymmetry.",
    fullDesc: "Scoliosis involves lateral curvature of the spinal column. Conservative clinic management focuses on improving spinal mobility, muscular balance, and managing associated tension.",
    commonSymptoms: ["Uneven shoulder or hip height", "Asymmetric back fatigue", "Muscle tightness along spinal curve", "Postural fatigue"],
    careApproach: "Targeted posture exercises, asymmetric muscle strengthening, gentle mobilization, and core stabilization guidance.",
    iconType: "layers"
  },
  {
    id: "disc-injury",
    name: "Disc Injury",
    category: "Spine",
    shortDesc: "Conservative care and movement guidance for intervertebral disc irritation and mechanical strain.",
    fullDesc: "Intervertebral disc issues can cause localized spinal discomfort or radiating sensations. Careful non-invasive assessment helps design conservative movement strategies.",
    commonSymptoms: ["Sharp pain when bending forward", "Discomfort when coughing or sneezing", "Associated leg/arm aching", "Restricted spinal flexion"],
    careApproach: "Spinal decompression positioning, gentle mobilization, directional preference exercise, and core endurance support.",
    iconType: "disc"
  },
  {
    id: "shoulder-pain",
    name: "Shoulder Pain",
    category: "Joints",
    shortDesc: "Targeted care for rotator cuff strain, shoulder impingement, and overhead movement discomfort.",
    fullDesc: "The shoulder is a highly mobile ball-and-socket joint reliant on scapular stability. Care evaluates the relationship between the cervical spine, thoracic cage, and shoulder girdle.",
    commonSymptoms: ["Pain reaching overhead or behind back", "Rotator cuff tenderness", "Night aching when lying on shoulder", "Clicking sensation"],
    careApproach: "Scapulothoracic mobilization, rotator cuff strengthening, joint glide techniques, and movement reprogramming.",
    iconType: "activity"
  },
  {
    id: "pinching-nerve",
    name: "Pinching Nerve",
    category: "Nerves & Posture",
    shortDesc: "Evaluation of nerve pathway compression, tingling, or radiating discomfort in arms or legs.",
    fullDesc: "Nerve compression sensations can occur when spinal nerves encounter mechanical restriction or soft-tissue tightness along their pathway.",
    commonSymptoms: ["Pins and needles sensation", "Radiating discomfort along limb", "Localized burning sensation", "Weakness in grip or stride"],
    careApproach: "Neural mobilization techniques, spinal opening postures, decompression exercises, and ergonomic modification.",
    iconType: "zap"
  },
  {
    id: "ankylosing-spondylitis",
    name: "Ankylosing Spondylitis Support",
    category: "Spine",
    shortDesc: "Supportive physical therapy and mobility maintenance for inflammatory spinal conditions.",
    fullDesc: "Ankylosing spondylitis is an inflammatory condition affecting spinal joints. Supportive clinic care emphasizes preserving spinal flexibility, chest expansion, and posture uprightness.",
    commonSymptoms: ["Morning stiffness exceeding 30 minutes", "Sacroiliac joint ache", "Gradual reduction in spinal flexibility", "Postural stooping tendencies"],
    careApproach: "Gentle range-of-motion routines, postural extension training, breathing mechanics, and low-impact functional mobility.",
    iconType: "layers"
  }
];

interface ConditionsSectionProps {
  onSelectCondition: (condition: ConditionItem) => void;
  onOpenBooking: () => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({
  onSelectCondition,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Spine", "Joints", "Neck & Head", "Nerves & Posture"];

  const filteredConditions = conditionsData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="conditions" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Clinical Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Conditions We Help With
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Professional conservative assessment and care planning for spinal, joint, and musculoskeletal concerns. Assessment and care may be available depending on each individual&apos;s condition.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-slate-400 text-slate-800"
            />
          </div>

        </div>

        {/* Conditions Grid (10 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <div
              key={condition.id}
              className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-400 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Top Accent Strip on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                    {condition.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {condition.name}
                </h3>

                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {condition.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectCondition(condition)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 group-hover:underline underline-offset-4"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Clinical Overview</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  title="Request Appointment for this condition"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Healthcare Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-600 flex items-start sm:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Note on Medical Care:</strong> Individual conditions and recovery timelines vary. Consultation and assessment are necessary to determine appropriate conservative care options. Back to Nature (Spinal Clinic) does not promise guaranteed or instant cures.
          </p>
        </div>

      </div>
    </section>
  );
};
